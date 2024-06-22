import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
    const [standardPad, setStandardPad] = useState(0);
    const [superPad, setSuperPad] = useState(0);
    const [superPlusPad, setSuperPlusPad] = useState(0);
    const [dailyPad, setDailyPad] = useState(0);
    const [superDailyPad, setSuperDailyPad] = useState(0);
    const [miniTampon, setMiniTampon] = useState(0);
    const [standardTampon, setStandardTampon] = useState(0);
    const [superTampon, setSuperTampon] = useState(0);
    const [selectedTab, setSelectedTab] = useState('beije Ped'); //initially selected tab
    const [totalPrice, setTotalPrice] = useState(0); //initially no product is selected, so total cost is set to 0
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    //calculated unit prices for products from original page
    const standardPadPrice = 6.084;
    const superPadPrice = 7.140;
    const superPlusPadPrice = 8.003;
    const dailyPadPrice = 3.759;
    const superDailyPadPrice = 4.323;
    const miniTamponPrice = 7.874;
    const standardTamponPrice = 8.488;
    const superTamponPrice = 8.974;

    //functions necessary for realtime cost calculation
    useEffect(() => {
        calculateCost();
    }, [standardPad, superPad, superPlusPad, dailyPad, superDailyPad, miniTampon, standardTampon, superTampon]);

    const calculateCost = () => {
        setTotalPrice(
            standardPad * standardPadPrice +
            superPad * superPadPrice +
            superPlusPad * superPlusPadPrice +
            dailyPad * dailyPadPrice +
            superDailyPad * superDailyPadPrice +
            miniTampon * miniTamponPrice +
            standardTampon * standardTamponPrice +
            superTampon * superTamponPrice
        );
    };

    //functions necessary for prompting message after products are added to cart
    const showSuccessMessage = () => {
        setMessage('Ürünleriniz sepete eklendi');
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setMessage('');
        }, 2000); // Hide modal after 2 seconds
    };

    const hideModal = () => {
        setShowModal(false);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}> beije </View>
            <Text style={styles.title}>Kendi Paketini Oluştur</Text>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>
                    Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
                </Text>
                <Text style={styles.subtitle}>
                    miktarlardan, sana özel bir paket oluşturalım.
                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.sliders}>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            style={[styles.tab, selectedTab === 'beije Ped' && styles.selectedTab]}
                            onPress={() => setSelectedTab('beije Ped')}
                        >
                            <Text style={styles.tabText}>beije Ped</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, selectedTab === 'beije Günlük Ped' && styles.selectedTab]}
                            onPress={() => setSelectedTab('beije Günlük Ped')}
                        >
                            <Text style={styles.tabText}>beije Günlük Ped</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tab, selectedTab === 'beije Tampon' && styles.selectedTab]}
                            onPress={() => setSelectedTab('beije Tampon')}
                        >
                            <Text style={styles.tabText}>beije Tampon</Text>
                        </TouchableOpacity>
                    </View>
                    {selectedTab === 'beije Ped' && (
                        <>
                            <View style={styles.sliderContainer}>
                                <Text>Standart Ped</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={standardPad}
                                    onValueChange={value => setStandardPad(value)}
                                />
                                <Text>{standardPad}</Text>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text>Süper Ped</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={superPad}
                                    onValueChange={value => setSuperPad(value)}
                                />
                                <Text>{superPad}</Text>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text>Süper+ Ped</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={superPlusPad}
                                    onValueChange={value => setSuperPlusPad(value)}
                                />
                                <Text>{superPlusPad}</Text>
                            </View>
                        </>
                    )}
                    {selectedTab === 'beije Günlük Ped' && (
                        <>
                            <View style={styles.sliderContainer}>
                                <Text>Günlük Ped</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={10}
                                    value={dailyPad}
                                    onValueChange={value => setDailyPad(value)}
                                />
                                <Text>{dailyPad}</Text>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text>Süper Günlük Ped</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={10}
                                    value={superDailyPad}
                                    onValueChange={value => setSuperDailyPad(value)}
                                />
                                <Text>{superDailyPad}</Text>
                            </View>
                        </>
                    )}
                    {selectedTab === 'beije Tampon' && (
                        <>
                            <View style={styles.sliderContainer}>
                                <Text>Mini Tampon</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={miniTampon}
                                    onValueChange={value => setMiniTampon(value)}
                                />
                                <Text>{miniTampon}</Text>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text>Standart Tampon</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={standardTampon}
                                    onValueChange={value => setStandardTampon(value)}
                                />
                                <Text>{standardTampon}</Text>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text>Süper Tampon</Text>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={10}
                                    value={superTampon}
                                    onValueChange={value => setSuperTampon(value)}
                                />
                                <Text>{superTampon}</Text>
                            </View>
                        </>
                    )}
                </View>

                <View style={styles.customPackage}>
                    <Text style={styles.customPackageTitle}>Özel Paketin</Text>
                    <Text style={styles.deliveryOption}>2 ayda 1 gönderim</Text>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/7692276/pexels-photo-7692276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={styles.image}
                    />
                    {(standardPad > 0 || superPad > 0 || superPlusPad > 0) && (
                        <View style={styles.packageContainer}>
                            <Text style={styles.customPackageTitle}>Ped Paketleri</Text>
                            {(standardPad > 0) && (
                                <Text>{standardPad} Standart Ped</Text>
                            )}
                            {(superPad > 0) && (
                                <Text>{superPad} Süper Ped</Text>
                            )}
                            {(superPlusPad > 0) && (
                                <Text>{superPlusPad} Süper Plus Ped</Text>
                            )}
                        </View>
                    )}
                    {(dailyPad > 0 || superDailyPad > 0) && (
                        <View style={styles.packageContainer}>
                            <Text style={styles.customPackageTitle}>Günlük Ped Paketleri</Text>
                            {(dailyPad > 0) && (
                                <Text>{dailyPad} Günlük Ped</Text>
                            )}
                            {(superDailyPad > 0) && (
                                <Text>{superDailyPad} Süper Günlük Ped</Text>
                            )}
                        </View>
                    )}
                    {(miniTampon > 0 || standardTampon > 0 || superTampon > 0) && (
                        <View style={styles.packageContainer}>
                            <Text style={styles.customPackageTitle}>Tampon Paketleri</Text>
                            {(miniTampon > 0) && (
                                <Text>{miniTampon} Mini Tampon</Text>
                            )}
                            {(standardTampon > 0) && (
                                <Text>{standardTampon} Standard Tampon</Text>
                            )}
                            {(superTampon > 0) && (
                                <Text>{superTampon} Süper Tampon</Text>
                            )}
                        </View>
                    )}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={showSuccessMessage}
                        >
                            <Text style={styles.buttonText}>Sepete Ekle (₺{totalPrice.toPrecision(5)})</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Modal to display success message */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={hideModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{message}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontStyle: "italic",
        fontSize: 36,
        position: "absolute",
        top: 10,
        left: 30,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FDF2E9',
        justifyContent: 'center',
    },
    title: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 300,
        top: 80,
    },
    textContainer: {
        position: 'absolute',
        marginLeft: 300,
        top: 120,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 4,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sliders: {
        flex: 1,
        marginRight: 16,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginLeft: 300,
    },
    tab: {
        padding: 8,
        backgroundColor: '#FDF2E9',
        borderRadius: 4,
    },
    selectedTab: {
        backgroundColor: '#F5CBA7',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sliderContainer: {
        marginBottom: 16,
        marginLeft: 300,
    },
    slider: {
        width: '100%',
        height: 70,
    },
    customPackage: {
        flex: 0.8,
        alignItems: 'center',
        marginBottom: 50,
        marginRight: 300,
        backgroundColor: '#f5f5f5',
        borderRadius: 72,
        padding: 16,
    },
    customPackageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    deliveryOption: {
        fontSize: 16,
        marginBottom: 16,
    },
    packageContainer: {
        flex: 1,
        padding: 8,
        backgroundColor: '#f5f5f5',
        alignItems: 'flex-start',
        marginBottom: 8,
        width: 300,
        borderRadius: 8,
    },
    buttonContainer: {
        alignItems: "center",
        backgroundColor: '#1C2833',
        height: 30,
        width: 300,
        borderRadius: 16,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f5f5f5'
    },
    image: {
        width: 500,
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default App;
