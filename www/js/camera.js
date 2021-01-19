/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let app = {
    init: function(){
        //when someone clicks the button btn, takephoto function is intiated
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    takephoto: function(){
        //takephoto, takes the camera plugin,
        let opts ={
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
         // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        cameraDirection: Camera.Direction.BACK,
        correctOrientation: true  //Corrects Android orientation quirks

             };
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },

    ftw: function(imgURI){
             //ftw,, function for when it works
             //This will writeout the value of the url of the picture on the screen
            document.getElementById('msg').textContent = imgURI;
            //This will display the picture
            document.getElementById('photo').src = imgURI;
                        },
    wtf: function(msg){
             //wtf,, function for when it fails
            document.getElementById('msg').textContent = msg;
                     }
};
            document.addEventListener('deviceready', app.init);
