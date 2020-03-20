var table;
var issueURItempl = "<a href ='https://github.com/OpenITI/Annotation/issues/new?";
issueURItempl += "assignees=&labels=enhancement&template=change-uri.md&title=";


// Add Arabic font for pdfMake:
pdfMake.fonts = {
      Amiri: {
              normal: 'Amiri-Regular.ttf',
              bold: 'Amiri-Bold.ttf',
              italics: 'Amiri-Slanted.ttf',
              bolditalics: 'Amiri-BoldSlanted.ttf'
      }
}

$(document).ready(function () {


    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }


    var srtContainer;
    var count;

    function checknull(data) {

        if (data != null) {
            return data;
        }
        else {
            return '';
        }

    }

    table = $('#example').DataTable({

        //"sDom": '<"wrapper"lfptip>',
        "sDom": "<'row rowpadding'B><'row'><'row'<'col-md-6'ilp><'col-md-6'f>r>t<'row'<'col-md-4'i>><'row'<'#colvis'>p>",
        "autoWidth": true,

        "pageLength": 50,
        "colReorder": true,
        "regex": true,
        dom: 'Bfrtip',
        buttons: [
           
            {
                extend: 'csv',
                filename: 'kitab-corpusmetadata',
                stripHtml: true,
                exportOptions: { orthogonal: 'rawExport' },
            },
         


           
        ],
        "deferRender": true,
        "ajax": "db/metadata_master.json",

        "columns": [
            {
                "data": 'coll_id',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            },

            {
                "data": 'URI',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            },

            {
                "data": 'author',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            },
            {
                "data": 'date',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            },
            {
                "data": 'title',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            },
            {
                "data": 'ed_info',
                "render": function (data, type, row) {
                   
                    return  checknull(data) ;
                  
                }
            },
            {
                "data": 'link',
                "render": function (data, type, row) {
                   
                    return  "<a href='" + checknull(data)+"' target='_blank'> Collection Link </a>" ;
                  
                }
            },
            {
                "data": 'tokens',
                "render": function (data, type, row) {
                  
                    return  checknull(data) ;
                  
                }
            },
            {
                "data": 'vols',
                "render": function (data, type, row) {
                    if (type === 'rawExport') {
                        return data;
                    }
                    return  checknull(data) ;
                  
                }
            }


        ]

    });

    $('#Shamela').on('click',function() {
        
        table.column(0).search("^Shamela", true).draw();  
      });
  
      $('#All').on('click',function() {
        table.columns().search('').draw();
      });
  
      $('#AnnotationVettedFilter').on('click',function() {
        table.search("mARkdown").draw();
      });
  
      $('#notYetAnnotatedFilter').on('click',function() {
        console.log("filtering...");
        table.search("(?<!mARkdown|completed|inProgress)$", true).draw();
      });
    

});
