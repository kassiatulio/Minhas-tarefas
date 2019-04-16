$(document).ready(function() {
  let lastCheckboxId = $(".card").length

  const generateCheckboxId = () => {
    return ++lastCheckboxId
  }

  const modalAdd = $(".modal-add")
  const modalRemove = $(".modal-remove")

  $(document).on("click", ".trash-icon", function(event) {
    modalRemove.modal()
    const cardRemove = $(event.target).parent().parent()
    
    $(".btn-remove").click(function() {
      cardRemove.remove()
      modalRemove.modal("hide")
    })  
  })

  $(".btn-add").click(function() {
    modalAdd.modal()
  })

  $(".btn-save").click(function() {
    const newTaskTitle = $(".task-title").val()
    const newTaskDescription = $(".task-description").val()
   
    $(".container").append(`
      <div class="card text-white bg-primary mb-3" id="card-${generateCheckboxId()}" style="max-width: 18rem;">
        <div class="card-header"><i class="trash-icon far fa-trash-alt"></i>${newTaskTitle}<div class="check custom-control custom-checkbox">
          <input type="checkbox" class="check custom-control-input">
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


  $(document).on("click", ".check", function(element){
    console.log(event)
    if ( $(".check").is(":checked") ) {
      $(this).parent().parent().fadeTo(1000, 1)
    } else {
      $(this).parent().parent().fadeTo(1000, 0.5)
      console.log("teste")
    }
  })
    


});