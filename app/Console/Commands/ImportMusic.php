<?php

namespace App\Console\Commands;


use App\Models\Music;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class ImportMusic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:import-music';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Adicionar arquivo CSV na pasta "./import-songs/" na raiz do projeto. Fará a importação das músicas para os arquivos e evitará dados repetidos.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $directory = base_path('import-songs');
        $files = File::glob($directory . '/*.csv');

        if (empty($files)) {
            $this->warn('Nenhum arquivo CSV encontrado na pasta music.');
            return;
        }

        $totalImported = 0;
        $totalSkipped = 0;
        $validHeaders = ['title', 'artist', 'album', 'isrc', 'platform', 'trackId', 'duration', 'addedDate', 'addedBy', 'url'];
        $countHeaders = count($validHeaders);

        foreach ($files as $file) {
            if (($handle = fopen($file, "r")) !== false) {
                $line = 1;
                $delimiter = $this->detectDelimiter($file);

                // Check if is the first line
                if ($line === 1) {
                    $headers = fgetcsv($handle, 1000, $delimiter);
                    $headers = array_map(function ($arr) {
                        return trim(preg_replace("/[^a-zA-Z0-9\ \-\_]/", "", $arr));
                    }, $headers);

                    if ($countHeaders !== count($headers) || !empty(array_diff($validHeaders, $headers))) {
                        $this->error('O arquivo ' . basename($file) . ' não possui os cabeçalhos corretos. (title;artist;album;isrc;platform;trackId;duration;addedDate;addedBy;url). Verifique!');
                        continue;
                    }
                }

                while (($data = fgetcsv($handle)) !== false) {
                    $line++;

                    if ($countHeaders !== count($data)) {
                        $this->warn(sprintf("O arquivo CSV %s contém um registro corrompido na linha %s, esta linha foi ignorada!", basename($file), $line));
                        continue;
                    }

                    $musicData = array_combine($headers, $data);
                    $this->normalizeArrayToUtf8($musicData);

                    $exists = Music::where('isrc', $musicData['isrc'])
                    ->where('platform', $musicData['platform'])
                    ->exists();

                    if (!$exists) {
                        Music::create([
                            'title' => $musicData['title'],
                            'artist' => $musicData['artist'],
                            'album' => $musicData['album'],
                            'isrc' => $musicData['isrc'],
                            'platform' => $musicData['platform'],
                            'trackId' => $musicData['trackId'],
                            'duration' => $musicData['duration'],
                            'addedDate' => $musicData['addedDate'],
                            'addedBy' => $musicData['addedBy'] ?? null,
                            'url' => $musicData['url'],
                        ]);

                        $totalImported++;
                    } else {
                        $totalSkipped++;
                    }
                }

                $this->info(sprintf("Arquivo %s importado com sucesso!", basename($file)));

                fclose($handle);
            }
        }

        $this->info("Importação concluída!");
        $this->info("Importados: {$totalImported}");
        $this->info("Ignorados (já existem): {$totalSkipped}");

        if ($this->confirm("Deseja deletar os arquivos CSV?")) {
            foreach ($files as $file) {
                File::delete($file);
            }
            $this->info('Arquivos CSV deletados com sucesso!');
        }

        $this->info('Processo finalizado!');
    }

    private function detectDelimiter(string $filename): string
    {
        $delimiters = [',', ';', '\t', '|'];
        $handle = fopen($filename, 'r');
        $firstLine = fgets($handle);
        fclose($handle);

        $delimiterCount = [];

        foreach ($delimiters as $delimiter) {
            $delimiterCount[$delimiter] = substr_count($firstLine, $delimiter);
        }

        arsort($delimiterCount);
        return key($delimiterCount);
    }

    private function normalizeArrayToUtf8(array &$array): void
    {
        foreach ($array as &$value) {
            $value = mb_convert_encoding($value, 'UTF-8');
        }
    }
}
