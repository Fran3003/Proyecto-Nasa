import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../componets/Header";
import fetchApi from '../../utils/fetch'
import TodaysImage from "../../componets/TodaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../componets/LastFiveDaysImages";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveImages] = useState<PostImage[]>([])

    useEffect(() =>{
        const loadTodaysImage =async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
                
            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd')
                
                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
                setLastFiveImages(lastFiveDaysImagesResponse);
                
            } catch (error) {
                console.error(error)
            }
        }

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);

    
    return (
    <View style={styles.container}>
        <Header />
        <TodaysImage {...todaysImage}/>
        <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',
    }
})

export default Home;