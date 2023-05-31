const fs = require('fs');

// fs.writeFile('example.txt', "this is an example", (err) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log('File Successfully Created')
//     fs.readFile('example.txt', (err, file) => {
//       if(err)
//         console.log(err)
//       else
//         console.log(file)
//     })
//   }
// })

// fs.rename('example2', 'example2.txt', (err) => {
//   if(err)
//     console.log(err)
//   else
//     console.log('Successfully renamed the file')
// })

// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//   if(err)
//     console.log(err)
//   else
//     console.log('Successfully appended data to file')
// })

// fs.unlink('example2.txt', (err) => {
//   if(err)
//     console.log(err)
//   else 
//     console.log('Successfully deleted this file')
// })

// fs.mkdir('tutorial', (err) => {
//   if(err)
//     console.log(err)
//   else 
//     console.log('folder successfully created')
// })

// fs.rmdir('tutorial', (err) => {
//   if(err)
//     console.log(err)
//   else
//     console.log('Successfully deleted the folder')
// })

// fs.mkdir('tutorial', (err) => {
//   if(err)
//     console.log(err)
//   else 
//     console.log('folder successfully created')
//     fs.writeFile('./tutorial/example.txt', '123', (err) => {
//       if(err)
//         console.log(err)
//       else
//         console.log('Successfully created')
//     })
// })

// fs.unlink('./tutorial/example.txt', (err) => {
//   if(err)
//     console.log(err)
//   else
//     fs.rmdir('tutorial', (err) => {
//       if(err)
//         console.log(err)
//       else
//         console.log('Successfully deleted the folder')
//     })
// })

fs.readdir('example', (err, files) => {
  if(err)
    console.log(err)
  else 
    for(let file of files){
      fs.unlink('./example/' + file, (err) => {
        if(err)
          console.log(err)
        else 
          console.log('Successfully deleted file')
      })
    }
})