let baseUrl = 'http://localhost:3000'
let newsLists = []
let newsDetail = []

$(document).ready(function(){
  checkAuth()
})

function checkAuth(){
  if(localStorage.access_token){
    $("#news-list").show()
    getNews()
    $("#form-login").hide()
    $("#btn-logout").show()
    getWeather()
    $('#login').hide()
    $('#logout').show()
    $('#register').hide()
    $('#login-form').hide()
    $('#register-form').hide()
    $('#widgetWeather').show()
    $('#player').show()
    $('#footer').show()

  }else{
    $('#login').hide()
    $('#logout').hide()
    $('#register').show()
    $('#login-form').show()
    $('#register-form').hide()
    $('#news-list').hide()
    $('#player').hide()
    $('#widgetWeather').hide()
    $('#footer').hide()
  }
}

$("#register").click(function(){
    $('#login-form').hide()
    $('#register-form').show()
    $('#login').show()
    $('#register').hide()
    return false
})

$("#login").click(function(){
    $('#login-form').show()
    $('#register-form').hide()
    $('#login').hide()
    $('#register').show()
    return false
})

$('#login-btn').click(function(event){
  event.preventDefault()
  const email = $('#email').val()
  const password = $('#password').val()

  //ajax
  $.ajax({
    method: 'POST',
    url: `${baseUrl}/login`,
    data: {
      email,
      password
    }
  })
  .done(response => {
    localStorage.setItem('access_token', response.access_token)
    checkAuth()
  })
  .fail(err => {
    console.log(err, '<=== error')
  })
  .always(() => {
    console.log('always')
  })
})

$('#register-btn').click(function(event){
  event.preventDefault()
  const email = $('#emailRegister').val()
  const password = $('#passwordRegister').val()
  const userName = $('#usernameRegister').val()

  //ajax
  $.ajax({
    method: 'POST',
    url: `${baseUrl}/register`,
    data: {
      email,
      password,
      userName
    }
  })
  .done(() => {
    alert('berhasil daftar!')
    $('#emailRegister').val('')
    $('#passwordRegister').val('')
    $('#usernameRegister').val('')
  })
  .fail(err => {
    console.log(err, '<=== error')
  })
  .always(() => {
    console.log('always')
  })
})

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
    const google_token = googleUser.getAuthResponse().id_token;
  
    $.ajax({
      method: "POST",
      url: `${baseUrl}/googleLogin`,
      data: {
        google_token,
      },
    })
      .done((response) => {
        const token = response.access_token;
        localStorage.setItem("access_token", token);
       

        $("#news-list").show()
        getNews()
        $("#form-login").hide()
        $("#btn-logout").show()
    
        $('#login').hide()
        $('#logout').show()
        $('#register').hide()
        $('#login-form').hide()
        $('#register-form').hide()
        $('#player').show()
        $('#widgetWeather').show()

        
      })
      .fail((err)=>{
        $('#login').hide()
        $('#logout').hide()
        $('#register').show()
        $('#login-form').show()
        $('#register-form').hide()
    })
  }

$('#logout').click(function(){
  localStorage.clear()
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      console.log("User signed out.")
    })
    checkAuth()
})
function logout() {
    localStorage.clear()
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      console.log("User signed out.")
    })
    checkAuth()
}

function getNews(){
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/news`,
    headers: {
      access_token: localStorage.access_token
    }
  })
  .done(response => {
    console.log(response, '<=== response')
    newsLists = response
 
    newsLists.forEach(e => {
      $('#news-list').append(`
      <div class="col mb-4">
                <div class="card h-100">
                    <img src="${e.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.description}</p>
                        <a href="${e.url}" class="card-link">Read More</a>
                    </div>
                </div>
            </div>`)
    })
  })
  .fail(err => {
    console.log(err, '<=== error')
  })
  .always(() => {
    console.log('always')
  })
}

function getWeather(){
    const lat = "-6.200000"
    const lon = "106.816666"
    $.ajax({
    method: 'GET',
    url: `${baseUrl}/weather?lat=${lat}&lon=${lon}`,
    headers: {
      access_token: localStorage.access_token
    }
  })
  .done(response => {
    $('#mainWeather').text(response.weather[0].main)
    $('#descriptionWeather').text(response.weather[0].description)
    $('#tempWeather').text(Math.round((response.main.temp-273)*10)/10 + "°C")
  })
  .fail(err => {
    console.log(err, '<=== error')
  })
  .always(() => {
    console.log('always')
  })
}