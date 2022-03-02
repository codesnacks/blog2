---
title: Axios Express Upload
date: "2019-08-02"
---

            const data = new FormData();
            // data.append("file", file, file.name);

            // axios({
            //   method: "post",
            //   url: "/upload",
            //   data: data,
            //   headers: {
            //     "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            //   },
            // }).then((res) => {
            //   setTranscription(res.data.transcription);
            //   setId(res.data.id);
            // });

---

Express

```
const multer = require("multer");


const UPLOAD_DIR = "./uploads/";
var upload = multer({ dest: UPLOAD_DIR });


// server.post("/upload", upload.single("file"), async function (req, res) {
  //   // req.file is the name of your file in the form above, here 'uploaded_file'
  //   // req.body will hold the text fields, if there were any
  //   console.log("file", req.file);

  //   try {
  //     // a wave file is needed for ffmpeg and later on audiowaveform
  //     fs.renameSync(`${req.file.path}`, `${req.file.path}.wav`);
  //   } catch (e) {
  //     // do nothing
  //     console.log(e);
  //   }

  //   // convert to mono, because that's needed for transcription
  //   execSync(
  //     `ffmpeg -i ./uploads/${req.file.filename}.wav -ac 1 ./uploads/${req.file.filename}-mono.wav`
  //   );

  //   try {
  //     // a wave file is needed for ffmpeg and later on audiowaveform
  //     fs.renameSync(`${req.file.path}-mono.wav`, `${req.file.path}.wav`);
  //   } catch (e) {
  //     // do nothing
  //     console.log(e);
  //   }

  //   const transcription = await transcribe(`${req.file.path}.wav`);

  //   res.status(200).send({ transcription, id: req.file.filename });
  // });
```
