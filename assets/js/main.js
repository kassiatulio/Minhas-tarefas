$(document).ready(function() {

  let lastCheckboxId = $(".card").length

  const modalAdd = $(".modal-add")

  const generateCheckboxId = () => {
    return ++lastCheckboxId
  }
  
 $(".btn-add").click(function() {
  modalAdd.modal()
 })

 $(".btn-save").click(function(){
   const newTaskTitle = $(".task-title").val()
   const newTaskDescription = $(".task-description").val()
   
  $(".container").append(`
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">${newTaskTitle}<div class="check custom-control custom-checkbox">
        <input type="checkbox" class="check custom-control-input" id="${generateCheckboxId()}">
        <label class="custom-control-label"></label>
      </div></div>
      <div class="card-body">
        <p class="card-text">${newTaskDescription}</p>
      </div>
    </div>
  `)
    modalAdd.modal("hide")

    $(".task-title").val("") 
    $(".task-description").val("") 
 })
 
 //$(".check").click(function(){
  //$(this).parent().parent().fadeTo(1000, 0.4);
})

});