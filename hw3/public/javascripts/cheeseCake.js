// Anish Karumuri
$(function() {
    $("#orderButton").click(function() {
        var notes = $("#notes").val();
        var quantity = $("#quantity").val();
        var flavor = $("input[name='Flavor']:checked").val();

        if (notes.toLowerCase().includes("vegan")) {
            alert("Please note: our cheesecakes contain dairy.");
        } else {
            $("#orderForm").html("Thank you! Your order has been placed.<br>" +
                                 "Topping: " + flavor + "<br>" +
                                 "Quantity: " + quantity + "<br>" +
                                 "Notes: " + notes);
        }
    });

// Show the dropdown menu when the mouse enters over Jan
    $("#selectedMonth, #monthDropdown").mouseenter(function() {
        $("#monthDropdown").show();
    });

    // Hide the dropdown menu when the mouse leaves the dropdown area
    $("#monthDropdown").mouseleave(function() {
        $("#monthDropdown").hide();
    });
            
    // Change the month when a dropdown item is clicked
    $("#monthDropdown a").click(function() {
        var selectedMonth = $(this).text();
        $("#selectedMonth").text(selectedMonth);
        $("#monthDropdown").hide();
    });
});