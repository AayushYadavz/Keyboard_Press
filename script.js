// Selecting that div with ID of insert
const insert = document.querySelector('#insert')

// Adding eventListener on window to access keys on keypress
window.addEventListener('keydown', (e) => {
    // Adding a div inside #insert div with a table
    insert.innerHTML = `
      <div class="color">
        <table>
         <tr>
           <th>Key</th>
           <th>Key Code</th>
           <th>Code</th>
         </tr>
         <tr>
           <td>${e.key === ' ' ? 'Space' : e.key}</td>
           <td>${e.keyCode}</td>
           <td>${e.code}</td>
         </tr>
        </table>
      </div>
    `
})
/* (${e.key === ' ' ? 'Space' : e.key}) On pressing space key the value in key will 
be space and while pressing other keys those keys will be printed. */