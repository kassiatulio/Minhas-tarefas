$(document).ready(function() {
  let lastCheckboxId = $(".card").length
  const modalAdd = $(".modal-add")
  const modalRemove = $(".modal-remove")
  const generateCheckboxId = () => {
    return ++lastCheckboxId
  }

  //REMOVE CARD
  $(document).on("click", ".trash-icon", function(event) {
    modalRemove.modal()
    const cardRemove = $(event.target).parent().parent()
    
    $(".btn-remove").click(function() {
      cardRemove.remove()
      modalRemove.modal("hide")
    })  
  })

  //ADICIONA CARD
  const nextColor = () => {
    const colorCard = [
      "primary", 
      "secondary", 
      "success", 
      "danger", 
      "warning", 
      "info", 
      "dark"
    ] 

    let currentColorIndex = 5;
    if (currentColorIndex == (colorCard.length - 1)) {
      currentColorIndex = -1;
    }    
    return colorCard[++currentColorIndex];
  }
  
  $(".btn-add").click(function() {
    modalAdd.modal()
  })

  $(".btn-save").click(function() {
    const newTaskTitle = $(".task-title").val()
    const newTaskDescription = $(".task-description").val()
   
    $(".container").append(`
      <div class="card text-white bg-${nextColor()} mb-3" id="card-${generateCheckboxId()}" style="max-width: 18rem;">
        <div class="card-header"><i class="trash-icon far fa-trash-alt"></i>${newTaskTitle}
          <div class="check form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1"></label>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">${newTaskDescription}</p>          
        </div>
      </div>
    `)

    modalAdd.modal("hide")

    $(".task-title").val("") 
    $(".task-description").val("") 
  })


//EFEITO CHEKED CARD  
  $(document).on("click", ".check", function(event){
    const isChecked = event.target.checked
        if (isChecked === true) {
        $(this).parent().parent().fadeTo(1000, 0.5)
        } else {
        $(this).parent().parent().fadeTo(1000, 1)
    }
  })


});