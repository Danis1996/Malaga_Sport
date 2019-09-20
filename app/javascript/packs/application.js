// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import Rails from 'rails-ujs'
Rails.start()
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(document).on('turbolinks:load',function(){
     $('.envoi').off("click").on("click",function(){
               var id = $(this).attr('id');
               Rails.ajax({
                    url: "/recrutements/new",
                    type: "get",
                    data: "data_value="+id,
                    success: function(data) {
                         window.location.replace('/recrutements/new?data_value='+id)
                    },
                    error: function(data) {}
                    })
          })
     $('.demand').off("click").on("click",function(){
               var id = $(this).attr('id');
               Rails.ajax({
                    url: "/requests/new",
                    type: "get",
                    data: "data_value="+id,
                    success: function(data) {
                         window.location.replace('/requests/new?data_value='+id)
                    },
                    error: function(data) {}
                    })
          })
     $('.lasa').off("click").on("click",function(){
               var id = $(this).attr('id');
               Rails.ajax({
                    url: "/events/new",
                    
                    type: "get",
                    data: "data_value="+id,
                    success: function(data) {
                         window.location.replace('/events/new?data_value='+id)
                    },
                    error: function(data) {}
                    })
          })
          
 });