import React, { useEffect } from 'react';
import $ from 'jquery';

const MainLoadingScreen = () => {
    useEffect(() => {
        $(document).ready(function() {
            var counter = 0;
            var count = 0;
            var i = setInterval(function() {
                $(".loadingscreen .loadingscreen-counter h1").html(count + "%");
                $(".loadingscreen").css("width", count + "%");

                counter++;
                count++;
                if (counter == 101) {
                    clearInterval(i);
                }
            }, 50);

            // After 15 seconds, clear the interval but continue showing the loadingscreen
            setTimeout(function() {
                clearInterval(i);
                // Check if window is already loaded
                if (document.readyState === 'complete') {
                    $(".loadingscreen").hide(); // Hide the loadingscreen
                }
            }, 15000); // 15 seconds

            // Check if window is fully loaded after another 10 seconds
            setTimeout(function() {
                $(window).on("load", function() {
                    $(".loadingscreen").hide(); // Hide the loadingscreen
                });
            }, 5000); // 10 seconds
        });
    }, []);

    return (
        <div className="loadingscreen">
            <div className="loadingscreen-counter">
                <h1>0%</h1>
            </div>
        </div>
    );
}

export default MainLoadingScreen;
