
function one(){
    
        $("#js-shopping-list-form").submit(function(event){
            event.preventDefault();
            const gotEntry = $(event.currentTarget).find('#shopping-list-entry');
            let entry = gotEntry.val()
           
            var txt1 = "<p>Text.</p>";               // Create element with HTML 
            var txt2 = $("<p></p>").text("Text.");   // Create with jQuery

            let a = "<li>";
            let b = "<span class='shopping-item'>" + entry + "</span>";
            let c = "<div class='shopping-item-controls'></div>";
            let d = "<button class='shopping-item-toggle'>";
            let e = "<span class='button-label'>check</span>";
            let f = "</button>";
            let g = "<button class='shopping-item-delete'>";
            let h = "<span class='button-label'>delete</span>";
            let i = "</button>";
            let j = "</div>";
            let k = "</li>";
            
            $("ul").after(a,b,c,d,e,f,g,h,i,j,k,);
            
        });
    
    }

function two(){
       $(".shopping-item-toggle").click(function(event){
            $(this).closest( "li" ).toggleClass( "shopping-item__checked" );
        });     
    }

function three(){
        $(".shopping-item-delete").click(function(event){
            $(this).closest( "li" ).hide();
        });     
}

$(document).ready(one(), two(), three());
    
