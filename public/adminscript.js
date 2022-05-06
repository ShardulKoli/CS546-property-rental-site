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
    $("#detailsDiv").html('');
    $("#detailsDiv").hide();

}

function getUsers(e, type) {
    if (e)
        e.preventDefault();

    $.ajax({
        type: "GET",
        url: "/admin/getUsers/" + type,
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();
                $("#detailsDiv").hide();
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

function getProperties(e) {
    if (e)
        e.preventDefault();

    $.ajax({
        type: "GET",
        url: "/admin/getProperties/",
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();
                $("#detailsDiv").hide();
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
        var li = '<li><a href="' + this._id + '" id="' + this.email + '" onclick="getUserDetail(event,this)">'
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

function getUserDetail(e, elem) {
    e.preventDefault();

    var email = $(elem).attr("id");

    $.ajax({
        type: "GET",
        url: "/admin/getUser/" + email,
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();
                $("#listDiv").hide();
                var userDetail = getUserDetailHtml(data.user);

                $("#detailsDiv").html(userDetail);
                $("#detailsDiv").show();


            } else {

            }
        },
        error(xhr, status, error) {
            alert(error);
        }
    });
}

function getUserDetailHtml(user) {
    var html = '<div>';

    var bookMarkedOrOwnedProp = '';
    var deleteUserBtn = '';

    if (user.userType === 1) {
        html += '<h3>Student Details</h3>';

        bookMarkedOrOwnedProp = '<dt>Bookmarked Properties</dt><dd>' + getPropNamesFromArr(user.bookmarkedPropertyDetails) + '</dd>';

        deleteUserBtn = '<button id="btnDelete_' + user.email + '_' + user.userType + '" onclick="removeUser(this)">Delete Student</button>';

    } else {
        html += '<h3>Broker Details</h3>'

        bookMarkedOrOwnedProp = '<dt>Owned Properties</dt><dd>' + getPropNamesFromArr(user.brokerOwnedPropertyDetails) + '</dd>';

        deleteUserBtn = '<button id="btnDelete_' + user.email + '_' + user.userType + '" onclick="removeUser(this)">Delete Broker along with his properties</button>';
    }

    html += '<div><dl><dt>Name</dt><dd>' + user.firstName + ' ' + user.lastName + '</dd>' +
        '<dt>Email</dt><dd>' + user.email + '</dd><dt>Contact</dt><dd>' + user.contact + '</dd>' +
        bookMarkedOrOwnedProp + '</dl></div></div>' +
        '<div>' + deleteUserBtn + '</div>';

    return html;
}


function removeUser(elem) {
    var email = $(elem).attr('id').split('_')[1];
    var userType = $(elem).attr('id').split('_')[2];

    $.ajax({
        type: "DELETE",
        url: "/admin/removeUser/" + email,
        success: function (data) {
            if (data.status) {

                var typeParam = userType === "1" ? 'student' : 'broker';
                getUsers(undefined, typeParam);

            } else {

            }
        },
        error(xhr, status, error) {
            alert(error);
        }
    });

}



function getPropNamesFromArr(props) {
    var html = '<ul>';

    $.each(props, function (i) {
        html += '<li>' + this.name + '-' + this.address + '-' + this.pincode + '-' + this.city + '-' + this.state + '</li>';
    });

    html += '</ul>';

    return html;
}