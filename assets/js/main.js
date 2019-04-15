$(document).ready(function() {

  let lastCheckboxId = $(".card").length

  const generateCheckboxId = () => {
    return ++lastCheckboxId
  }

  const modalAdd = $(".modal-add")
  const modalRemove = $(".modal-remove")

  
  $(".trash-icon").click(function(event) {
    modalRemove.modal()
    const cardRemove = event.target.parentNode
    console.log(cardRemove)
  })

 
  $(".btn-add").click(function() {
    modalAdd.modal()
  })


  $(".btn-save").click(function() {
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
        <i class="trash-icon far fa-trash-alt"></i>
      </div>
    </div>
  `)
  modalAdd.modal("hide")

  $(".task-title").val("") 
  $(".task-description").val("") 
  })

  $(".btn-remove").click(function() {
    
  })  
 
  $(".check").click(function(){
  $(this).parent().parent().fadeTo(1000, 0.4);
})

});