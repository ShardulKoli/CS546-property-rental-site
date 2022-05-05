function verifyPassword() {
    var password = $("#txtPass").val();

    if (password && password.trim() !== "") {
        $.ajax({
            type: "POST",
            url: "/admin/",
            data: { password: password },
            success: function (data) {
                if (data.status) {

                    $("#passDiv").hide();
                    $("#mainDiv").show();



                } else {
                    $("#errorPassDiv").show();
                }
            },
            error(xhr, status, error) {
                alert(error);
            }
        });
    } else {
        $("#errorPassDiv").show();
    }
}


function logout(e) {
    e.preventDefault();

    $("#passDiv").show();
    $("#mainDiv").hide();
    $("#chartsDiv").hide();
    $("#detailsDiv").html('');
    $("#detailsDiv").hide('');
    $("#txtPass").val('');

}

function getUsers(e, type) {
    e.preventDefault();

    
}