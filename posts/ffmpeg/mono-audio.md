-ac 1 makes it mono

execSync(
      `ffmpeg -ss ${start} -i ${audioFilePath} -ac 1 -t ${duration} ${wavFilePath}`
    );  