$(function(){
    $("#add_burger").on("submit", function(event){
        event.preventDefault();
        var col_name = "burger_name";
        var burger_name = $("#new-burger-name").val().trim();
        if(burger_name ===""){
            $("#blank-field-warning").show();
            return;
        }else if(burger_name.includes("'")){
            $("#special-char-warning").show();
            return;
        }
        var newBurger = { 
            burger_name : burger_name,
            col_name: col_name
        };
                
        $.ajax("/api/burgers",{
            type: "POST",
            data : newBurger
        }).then(function(){
            console.log("new burger created");
            location.reload();
        });
    });

    $(".un-devored-panel-body").on('click', '#un-devoured-btn', function(){
        var id = $(this).data("id");
        var newDevouredState = {
            devoured : 1
        }

        $.ajax("/api/burgers/" + id,{
            type : 'PUT',
            data : newDevouredState
        }).then(function (){
            console.log("A burgur has just been deveoured");
            location.reload();
        });
    });
});
