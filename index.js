
const YoutubeMp3Downloader = require("youtube-mp3-downloader");
const prompt = require('prompt-sync')();
const MPEGDIR = "/usr/bin/ffmpeg";
const FOLDERDIR = './mp3Donwloaded';
var linkid = prompt('Informe o LINKID do video:');



var YD = new YoutubeMp3Downloader({
    "ffmpegPath": MPEGDIR,                  // FFmpeg binary location
    "outputPath": FOLDERDIR,                // Output file location (default: the home directory)
    "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
    "queueParallelism": 2,                  // Download parallelism (default: 1)
    "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
    "allowWebm": false                      // Enable download from WebM sources (default: false)
});

//Download video and save as MP3 file
YD.download(linkid);

YD.on("finished", function(err, data) {
    console.log(data,"Terminou!");
});

YD.on("error", function(error) {
    console.log(error);
});

YD.on("progress", function(progress) {
    console.log(progress);
});
