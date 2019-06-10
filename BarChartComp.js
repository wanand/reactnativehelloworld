import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { LineChart, PieChart, ContributionGraph } from 'react-native-chart-kit';


export default class BarChartComp extends React.Component {

  render() {

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2 // optional, default 3
    };

    const screenWidth = Dimensions.get('window').width;

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          data: [ 20, 45, 28, 80, 99, 43 ],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }]
      };

    const data2 = [
        { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
      ];

    const commitsData = [
        { date: '2017-01-02', count: 1 },
        { date: '2017-01-03', count: 2 },
        { date: '2017-01-04', count: 3 },
        { date: '2017-01-05', count: 4 },
        { date: '2017-01-06', count: 5 },
        { date: '2017-01-30', count: 2 },
        { date: '2017-01-31', count: 3 },
        { date: '2017-03-01', count: 2 },
        { date: '2017-04-02', count: 4 },
        { date: '2017-03-05', count: 2 },
        { date: '2017-02-30', count: 4 }
      ];

    return (
        <View>
        <Text>
          Bezier Line Chart
        </Text>
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            />
        <PieChart
            data={data2}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            />

        <ContributionGraph
        values={commitsData}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});
