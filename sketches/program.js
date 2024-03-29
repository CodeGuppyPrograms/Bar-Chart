// #SKETCHNAME Bar chart
function enter()
{
    background("lightblue");

    barChart( [ [ 75, 90, 80], [ "2016", "2015", "2014" ] ],
                "Growth per year (%)",
                10, 10, 320, 240, "indianred" );

    barChart( [ [ 10, 43, 24, 80, 95], [ "Jane", "John", "Dan", "Jeff", "Pam" ] ],
                "Work completed per developer (%)",
                420, 10, 320, 240, "navy" );
                
}

// arData[0] = array of Y values (numbers from 0 to 100)
// arData[1] = array of bar labels (strings)
function barChart(arData, chartTitle, chartX, chartY, chartWidth, chartHeight, chartColor)
{
    var arYValues = arData[0];  
    var arXValues = arData[1];

    var graphHeight = chartHeight - 20 - 20;
    var graphWidth =  chartWidth - 20;

    chartBase(chartTitle, chartX, chartY, chartWidth, chartHeight);
    chartGrid(chartX, chartY, graphWidth, graphHeight);
    chartBars(arYValues, arXValues, chartX, chartY, graphWidth, graphHeight, chartColor);
}

function chartBars(arYValues, arXValues, chartX, chartY, graphWidth, graphHeight, chartColor)
{
    var noBars = arYValues.length;
    var barSize = graphWidth / (noBars * 2 + 1);

    for(var i = 0; i < noBars; i++)
    {
        var barHeight = (arYValues[i] * graphHeight) / 100;
        var barX = chartX + barSize + i * barSize * 2;
        var barY = chartY + 20 + graphHeight - barHeight;

        fill(chartColor);
        rect(barX, barY, barSize, barHeight);

        fill("black");
        text(arXValues[i], barX, graphHeight + 20 + 20 + 5);
    }
}

function chartBase(title, chartX, chartY, chartWidth, chartHeight)
{
    noStroke();
    fill("white");
    rect( chartX, chartY, chartWidth, chartHeight );

    fill("black");
    text(title, chartX + 10, chartY + 10);
}

function chartGrid(chartX, chartY, graphWidth, graphHeight)
{
    var yStep = graphHeight / 10;

    for (var i = 0; i <= 10; i++)
    {
        var lineY = chartY + 20 + graphHeight - i * yStep;

        stroke("lightgray");
        line(chartX + 20, lineY, chartX + 20 + graphWidth - 1, lineY);

        noStroke();
        fill("black");
        text(i * 10, chartX, lineY + 5); 
    }
}
