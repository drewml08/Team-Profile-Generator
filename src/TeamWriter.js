var fs = require('fs');

class TeamWriter {
    constructor(outputPath){
        this.outputPath = outputPath;
        this.html = "";
    }
    write(team) {
        this.beginDocument();

        for (var i = 0; i < team.length; i++) {
            this.teamCard(team[i]);
        }

        this.endDocument();

        fs.writeFile(this.outputPath + 'index.html', this.html, function (err) {
            if (err) throw err;
            console.log('Created My Team Page!');
          });
        
    }
    
    beginDocument() {
        this.html = '<!DOCTYPE html>\n';
        this.html += '<html lang="en">\n';
        this.html += '<head>\n';
        this.html += '     <meta charset="UTF-8">\n';
        this.html += '       <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
        this.html += '       <title>My Team</title>\n';
        this.html += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">\n';
        this.html += '      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">\n';
        this.html += '      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">\n';
        this.html += '       <link rel="stylesheet" href="style.css">\n';
        this.html += '    </head>\n';
        this.html += '     <body>\n';
        this.html += '       <header>\n';
        this.html += '          <nav class="navbar" id="navbar">\n';
        this.html += '               <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>\n';
        this.html += '        </nav>\n';
        this.html += '      </header>\n';
        this.html += '      <main>\n';
        this.html += '          <div class="container">\n';
        this.html += '<div class="row justify-content-center" id="team-cards">\n';
    }

    endDocument() {
        this.html += '    </div>\n';
        this.html += '</div>\n';
        this.html += '  </main>\n';
    
        this.html += '</body>\n';
        this.html += '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>\n';
        this.html += '</html>\n';
    }

    teamCard(teamMember) {
        this.html += '    <div class="col-4 mt-4">\n';
        this.html += '  <div class="card h-100">\n';
        this.html += '      <div class="card-header">\n';
        this.html += teamMember.getCardTitle();
        this.html += '        </div>\n';
        this.html += '       <div class="card-body">\n';
        this.html += teamMember.getCardBody();
        this.html += '    </div>\n';

        this.html += '</div>\n';
        this.html += ' </div>\n';
    }
    
}
module.exports = TeamWriter;