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

// Show the dropdown menu when the mouse enters over month
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

        // Issue a POST request to the server requesting orders for the selected month
        $.post('/orders', { month: selectedMonth }, function(data) {

            var $ordersList = $('#ordersList');
            $ordersList.empty(); // Clear existing orders

            // Check if data contains orders
            if (data && data.length > 0) {
                // Iterate through the orders and append them to the ordersList
                $.each(data, function(index, order) {
                    $ordersList.append(
                        $('<li>').text(order.quantity + " " +order.topping)
                    );
                });
            } else {
                // If no orders were returned, display a message
                $ordersList.append($('<li>').text('No orders found for ' + selectedMonth));
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            alert('Failed to retrieve orders. Please try again later.');
        });
    });
});