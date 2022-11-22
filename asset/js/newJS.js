
      $(document).ready(function(){          

          $(".openNew").click(function () {
              console.log($(this).parent().find(".paper_abstract_text").text());
              var x = $(this).parent().find(".paper_abstract_text");
              $(x).toggle("slow");
              /*if(autoTimer) clearTimeout(autoTimer);
              autoTimer = null;*/
          });
         
      })
