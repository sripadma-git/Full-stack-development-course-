const fs = require('fs');

// 1. Write a new note
fs.writeFile('note.txt', 'This is my first note.', (err) => {
  if (err) throw err;
  console.log('✅ Note created successfully.');

  // 2. Read the note
  fs.readFile('note.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\n📝 Reading Note:');
    console.log(data);

    // 3. Append more text to the note
    fs.appendFile('note.txt', '\nAdding more thoughts to the note...', (err) => {
      if (err) throw err;
      console.log('\n✏️ Note updated.');

      // 4. Read updated note
      fs.readFile('note.txt', 'utf8', (err, updatedData) => {
        if (err) throw err;
        console.log('\n📄 Updated Note Content:');
        console.log(updatedData);

        // 5. Delete the note
        fs.unlink('note.txt', (err) => {
          if (err) throw err;
          console.log('\n🗑️ Note deleted.');
        });
      });
    });
  });
});



