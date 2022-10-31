var fondInit = [];
var cnt = 0;
window.onload = function () {
    fondInit = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    
    fondDeepCal(fondInit);

    // if(cnt > 0){
    //     cnt = 0;
    //     fondDeepCal(fondInit);
    // } 
    
}

function fondDeepCal(fondInit) {
    var curr = 0;
    cnt = 0;
    for (i = 0; i < fondInit.length; i++){
        for (j = 0; j < fondInit[i].length; j++) {
            try{
                curr = fondInit[i][j];
                up = fondInit[i-1][j];
                down = fondInit[i+1][j];
                left = fondInit[i][j-1];
                right = fondInit[i][j+1];

                if (!(up == 0 || down == 0 || left == 0 || right == 0)
                 && curr >= up && curr >= down && curr >= left && curr >= right) {
                    curr++;
                    cnt++;
                }
                fondInit[i][j] = curr;
                //console.log("[", i, ",", j, "] ", curr, up, down, left, right)
            }
            catch (ex){ }
        }
    }
    console.log(fondInit);
}
