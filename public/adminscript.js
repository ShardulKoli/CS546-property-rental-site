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
    $("#dataListUl").html('');
    $("#listDiv").hide();

}

function getUsers(e, type) {
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "/admin/getUsers/" + type,
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();

                var userListHtml = getUserListHtml(data.users);

                $("#dataListUl").html(userListHtml);
                $("#listDiv").show();

            } else {

            }
        },
        error(xhr, status, error) {
            alert(error);
        }
    });
}

function getProperties(e, type) {
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "/admin/getProperties/",
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();

                var userListHtml = getPropertyListHtml(data.properties);

                $("#dataListUl").html(userListHtml);
                $("#listDiv").show();

            } else {

            }
        },
        error(xhr, status, error) {
            alert(error);
        }
    });
}

function getUserListHtml(users) {

    var html = '';

    $.each(users, function (i) {
        var li = '<li><a href="' + this._id + '" id="' + this._id + '" onclick="getUserDetail(event,this)">'
            + this.firstName + ' ' + this.lastName + '-' + this.email + '</a></li>';

        html += li;
    });

    return html;

}

function getPropertyListHtml(props) {
    var html = '';

    $.each(props, function (i) {
        var li = '<li><a href="' + this._id + '" id="' + this._id + '" onclick="getPropertyDetail(event,this)">'
            + this.name + '-' + this.address + '-' + this.pincode + '-' + this.city + '-' + this.state + '</a></li>';

        html += li;
    });

    return html;
}