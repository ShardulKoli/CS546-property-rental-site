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


function getPropertyDetail(e, elem) {
    e.preventDefault();

    var id = $(elem).attr("id");

    $.ajax({
        type: "GET",
        url: "/admin/getProperty/" + id,
        success: function (data) {
            if (data.status) {

                $("#passDiv").hide();
                $("#listDiv").hide();
                var propdetail = getPropertyDetailHtml(data.prop);

                $("#detailsDiv").html(propdetail);
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


function getPropertyDetailHtml(prop) {
    var html = '<div>';

    html += '<h3>Property Details</h3>';

    var deletePropBtn = '<button id="btnDelete_' + prop._id + '" onclick="removeProperty(this)">Delete Property</button>';


    var centralA = prop.centralAir ? 'Yes' : 'No'
    var petF = prop.petFriendly ? 'Yes' : 'No'
    var partyF = prop.partyF ? 'Yes' : 'No'
    var garage = prop.garrage ? 'Yes' : 'No'
    var rented = prop.status ? 'Yes' : 'No'

    html += '<div><dl><dt>Name</dt><dd>' + prop.name + '</dd>' +
        '<dt>Images</dt><dd>' + getImages(prop.images) + '</dd>' +
        '<dt>Address</dt><dd>' + prop.address + '</dd><dt>Pincode</dt><dd>' + prop.pincode + '</dd>' +
        '<dt>City</dt><dd>' + prop.city + '</dd>' +
        '<dt>State</dt><dd>' + prop.state + '</dd>' +
        '<dt>Type</dt><dd>' + prop.type + '</dd>' +
        '<dt>Beds</dt><dd>' + prop.beds + '</dd>' +
        '<dt>Bath</dt><dd>' + prop.bath + '</dd>' +
        '<dt>Balcony</dt><dd>' + prop.balcony + '</dd>' +
        '<dt>Central Air</dt><dd>' + centralA + '</dd>' +
        '<dt>Pet Friendly</dt><dd>' + petF + '</dd>' +
        '<dt>Party Friendly</dt><dd>' + partyF + '</dd>' +
        '<dt>Garage</dt><dd>' + garage + '</dd>' +
        '<dt>Nearby Medical</dt><dd>' + prop.nearByMedical + '</dd>' +
        '<dt>Nearby Schools</dt><dd>' + prop.nearBySchools + '</dd>' +
        '<dt>Nearby Commute</dt><dd>' + prop.nearByCommute + '</dd>' +
        '<dt>Rent</dt><dd>' + prop.rent + '</dd>' +
        '<dt>Brokerage Commute</dt><dd>' + prop.brokerage + '</dd>' +
        '<dt>Deposit</dt><dd>' + prop.deposit + '</dd>' +
        '<dt>Minimum Lease Period</dt><dd>' + prop.minimumLeasePeriod + '</dd>' +
        '<dt>Broker</dt><dd>' + prop.broker + '</dd>' +
        '<dt>Rented Out</dt><dd>' + rented + '</dd>' +
        '</dl></div></div>' +
        '<div>' + deletePropBtn + '</div>';

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

function removeProperty(elem) {
    var id = $(elem).attr('id').split('_')[1];

    $.ajax({
        type: "DELETE",
        url: "/admin/removeProperty/" + id,
        success: function (data) {
            if (data.status) {

                getProperties(undefined);

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

function getImages(imgArr) {
    var html = '<ul>';

    if (imgArr.length > 0) {
        $.each(imgArr, function (i) {
            if (this.trim() !== "")
                html += '<li><img id="' + i + '" src="' + this + '" width="200" height="200"></li>';
        });

    } else {
        html += '<li>N/A</li>';
    }

    html += '</ul>';

    return html;
}


function showHomeDiv(e) {
    e.preventDefault();
    $("#chartsDiv").hide();
    $("#homeDiv").show();
    $("#dataListUl").html('');
    $("#listDiv").hide();
    $("#detailsDiv").html('');
    $("#detailsDiv").hide();
}

function showChartsDiv(e) {
    e.preventDefault();
    $("#brokerChartContainer").html('');
    $("#cityChartContainer").html('');
    getInsightsData();
    $("#chartsDiv").show();
    $("#homeDiv").hide();
    $("#dataListUl").html(+'');
    $("#listDiv").hide();
    $("#detailsDiv").html('');
    $("#detailsDiv").hide();
}

function populateCharts(insights) {

    var brokerChart = anychart.pie();

    // set the chart title
    brokerChart.title("Brokers by uploaded number of Properties");

    // add the data
    brokerChart.data(insights.brokerData);

    // set legend position
    brokerChart.legend().position("right");
    // set items layout
    brokerChart.legend().itemsLayout("vertical");

    // display the chart in the container
    brokerChart.container('brokerChartContainer');
    brokerChart.draw();

    var cityWiseChart = anychart.pie();

    // set the chart title
    cityWiseChart.title("Cities by number of Rental Properties");

    // add the data
    cityWiseChart.data(insights.cityData);

    // set legend position
    cityWiseChart.legend().position("right");
    // set items layout
    cityWiseChart.legend().itemsLayout("vertical");

    // display the chart in the container
    cityWiseChart.sort("desc");//sort by descending
    cityWiseChart.container('cityChartContainer');
    cityWiseChart.draw();
}


function getInsightsData() {
    var insights = {};
    $.ajax({
        type: "GET",
        url: "/admin/getInsights/",
        success: function (data) {
            if (data.status) {
                populateCharts(data.insights);

            } else {

            }
        },
        error(xhr, status, error) {
            alert(error);
        }
    });

    return insights;
}