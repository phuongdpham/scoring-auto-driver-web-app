
/**
 * Created by phamd on 1/10/2017.
 */
var exec = require('child_process').exec;
const mv = require('mv');

var createOutput = (sensorId) => {
    try {
        exec(`java -jar ${appRoot}/jar/ScoringAutoDriver.jar ${appRoot}/jar/SensorFile${sensorId}.csv`,
            function (error, stdout, stderr){
                if (error) {
                    console.log('Error');
                }
            });
        mv(`${appRoot}/output.json`, `${appRoot}/public/data/output.json`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    createOutput
};
