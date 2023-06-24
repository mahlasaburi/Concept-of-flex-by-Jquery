$(document).ready(function () {

    let justify  = $("#Justify")
    let align  = $("#Align")
    let direction  = $("#Direction")
    let checkbox  = $("#checkbox")
    let box = $("#box")
    let allbox = $("#allbox")
    let classJustify = ''
    let classAlign = ''
    let classDirection = ''
    let classWrap = ''

    function generator (){
      return allbox.html(`
               <section id="box" class="col-12 d-flex  text-white ${classJustify} ${classAlign} ${classDirection} ${classWrap}">
                  <div class="col-2 rounded-1 me-1 mb-1">200 X 200</div>
                  <div class="col-2 rounded-1 me-1 mb-1">300 X 100</div>
                  <div class="col-2 rounded-1 me-1 mb-1">100 X 300</div>
                  <div class="col-2 rounded-1 me-1 mb-1">100 X 100</div>
              </section>`)
    }
    justify.on("change", (e)=> {
      classJustify = e.target.value
      generator()
    });
    align.on("change", (e)=> {
      classAlign = e.target.value
      generator()
    });
    direction.on("change", (e)=> {
      classDirection = e.target.value
      generator()
    });
    checkbox.on("change", (e)=> {
      if(e.target.checked){
        classWrap = 'flex-wrap'
      }else {
        classWrap = 'flex-nowrap'
      }
      generator()
    });
  });
  