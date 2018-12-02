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
var app = {
    // Application Constructor
    initialize: function () {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        ////////////////////////////////// BATTERY ///////////////////////////////////////////////////////
        document.activeElement("batterystatus", onBatteryStatus, false);
        function onBatteryStatus(status) {
            document.getElementById("battery").innerHTML = "Level: " + status.level + " isPlugged: " + status.isPlugged;
        }
        ////////////////////////////////// VOLUME UP/////////////////////////////////////////////////////////////
        document.addEventListener("volumeupbutton", volup, false);


        function volup() {
            alert("volume up");
        }

        ///////////////////////////////// VOLUME DOWN ////////////////////////////////////////////////////////
        document.addEventListener("volumedownbutton", voldown, false);


        function voldown() {
            alert("volume down");
        }


        ///////////////////////////////////////////  BACK BUTTON //////////////////////////////////////////////        
        document.addEventListener("backbutton", call, false);

        function call() {
            alert("this is a test");
        }
        /////////////////////////////////////////// Device On Line ////////////////////////////////////////////        
        document.addEventListener("online", online, false);
        function online() {
            alert("You are online with ")

        }

        ////////////////////////////////////// OFFLINE /////////////////////////////////////////////////////////        
        document.addEventListener("offline", offline, false);
        function offline() {
            alert("You are offline with")
        }
        /////////////////////////////////////////////// Hallow World ///////////////////////////////////////////        

        document.getElementById("button").addEventListener("click", call);
        function call() {
            alert("this is a test");
        }
        //////////////////////////////////////// CAMERA /////////////////////////////////////////////////////////

        document.getElementById("camera").addEventListener("click", camera);
        function camera() {
            navigator.camera.getPicture(onSucess, onFalure, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
            function onSucess(imageData) {
                var image = document.getElementById("myImage");
                image.src = "data:image/jpeg;base64," + imageData;

            }
            function onFalure(message) {
                alert("Error!!" + message);

            }
        }
        //////////////////////////////////// VIBRATION //////////////////////////////////////////////////////////

        document.getElementById("vibrate").addEventListener("click", vibrate);
        function vibrate() {
            navigator.vibrate(3000);
        }
        ////////////////////////////////////  VIBRATION PATTERN //////////////////////////////////////////////////        
        document.getElementById("vibratePattern").addEventListener("click", vibrationPattern);

        function vibrationPattern() {
            navigator.vibrate([300, 2323, 34323, 54354, 3232, 12, 23, 432, 234, 543, 3234, 3234, 54345])
        }
        ///////////////////////////////// NETWORK ////////////////////////////////////////////////////////////////        
        document.getElementById("network").addEventListener("click", network);
        function network() {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = "Unknown Connection";
            states[Connection.ETHERNET] = "ETHERNET Connection";
            states[Connection.WIFI] = "WIFI Connection";
            states[Connection.CELL] = "CELL Connection";
            states[Connection.CELL_2G] = "CELL_2G Connection";
            states[Connection.CELL_3G] = "CELL_3G Connection";
            states[Connection.CELL_4G] = "CELL_4G Connection";
            states[Connection.NONE] = "no Connection";
            alert("Connection type is " + states[networkState]);

        }
        ///////////////////////////////// DEVICE DETAILS /////////////////////////////////////////////////////////        
        document.getElementById("device").addEventListener("click", device);
        function device() {
            var platform = device.platform;
            var cordova = device.cordova;
            var model = device.model;
            var uuid = device.uuid;
            var version = device.version;
            alert("Platform :=" + platform + "\n" +
                "Cordova :=" + cordova + "\n" +
                "Model :=" + model + "\n" +
                "Uuid :=" + uuid + "\n" +
                "Android version :=" + version + "\n");
        }
        ///////////////////////////////////// MOTION //////////////////////////////////////////////////////////////        
        document.getElementById("motion").addEventListener("click", motion);
        function motion() {
            navigator.accelerometer.getCurrentAcceleration(accSucess, accFail);
            function accSucess(accSucess) {
                alert("X axis : " + accSucess.x + "\n" +
                    "Y axis : " + accSucess.y + "\n" +
                    "Z axis : " + accSucess.z + "\n" +
                    "Time Stamp : " + accSucess.timestamp)

            }
            function accFail(message) {
                alert(message)

            }

        }
        //////////////////////////////////// MOTION LIVE //////////////////////////////////////////////////////////        
        document.getElementById("motionlive").addEventListener("click", motionlive);
        function motionlive() {
            var accOptions = {
                frequency: 30
            }
            var watchID = navigator.accelerometer.watchAcceleration(accLiveSucess, accLiveError, accOptions);



            function accLiveSucess(accSucess) {
                document.getElementById("acc").innerHTML = "X axis : " + accSucess.x + "\n" +
                    "Y axis : " + accSucess.y + "\n" +
                    "Z axis : " + accSucess.z + "\n" +
                    "Time Stamp : " + accSucess.timestamp
                setTimeout(function () {
                    navigator.accelerometer.clearWatch(watchID);
                    document.getElementById("acc").innerHTML = "Acclaration Values";
                }, 3000);
            }
            function accLiveError(message) {
                alert(message);
            }
        }
        ////////////////////////////////// LANGUAGE ///////////////////////////////////////////////////////////////        
        document.getElementById("language").addEventListener("click", language);
        function language() {
            navigator.globalization.getPreferredLanguage(onSucess, onError);
            function onSucess(onSucess) {
                alert("Current Date: " + onSucess.value)
            }
            function onError(onError) {
                alert(onError)
            }

        }
        /////////////////////////////////// DATE /////////////////////////////////////////////////////////////////        
        document.getElementById("date").addEventListener("click", date);

        function date() {
            var date = new Date();
            var options = {
                formatLength: "short",
                selector: "date and time"
            }
            navigator.globalization.dateToString(date, onSucess, onError, options);
            function onSucess(date) {
                alert("Date" + date.value)
            }
            function onError(error) {
                alert("Error !!!" + error)
            }
        }
        ///////////////////////////////////// FORM //////////////////////////////////////////////////////////////////        
        document.getElementById("submit").addEventListener("click", submit);
        function submit() {
            var name = document.getElementById("fName").value;
            var sur = document.getElementById("fSurname").value;
            var fage = document.getElementById("fage").value;
            alert("Name :" + name + "\n" + "Surname :" + sur + "\n" + "Age :" + fage)
        }
        ////////////////////////////////////// FACTORIAL ////////////////////////////////////////////////////        
        document.getElementById("factoroalCal").addEventListener("click", calulate);
        function calulate() {
            var number = parseInt(document.getElementById("number").value);
            function factorial(n) {
                var i;
                var fact = 1;

                for (i = 1; i <= n; i++) {
                    fact = fact * i;

                }
                return fact;
            }
            document.getElementById("factorialValue").innerHTML = factorial(number);
            setTimeout(function () {
                document.getElementById("factorialValue").innerHTML = "Try one more value";
                document.getElementById("number").value = "";
            }, 3000);

        }
        ///////////////////////////////////////  CURRENCY ///////////////////////////////////////////////////         
        document.getElementById("currencyConvert").addEventListener("click", convert);
        function convert() {
            var choice = document.getElementById("curr").value;
            number = parseInt(document.getElementById("currencyValue").value);
            if (choice == "dollers") {
                var cal = number * 65;
                document.getElementById("result").innerHTML = cal + " Rs";
            }
            if (choice == "pound") {
                var cal = number * 82;
                document.getElementById("result").innerHTML = cal + " Rs";
            }
            if (choice == "ero") {
                var cal = number * 72;
                document.getElementById("result").innerHTML = cal + " Rs";
            }
        }
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);

        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

app.initialize();
















