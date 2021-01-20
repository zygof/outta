import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import SearchBar from "react-native-dynamic-search-bar";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    updateSearch = (search) => {
        this.setState({ search });
      };
      
    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Zygof",
        gps: {
            longitude: -0.5734212589261247,
            latitude: 44.84356383042417
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Riz",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Nouille",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salades",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Dessert",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Boisson",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Mc Donald",
            telephone:"0556123456",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Mc first",
                    photo: images.crispy_chicken_burger,
                    description: "Burger avec poulet croustillant, fromage et laitue",
                    calories: 200,
                    reduction: -10,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Menu CBO",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Burger de poulet croustillant avec salade de chou au miel et à la moutarde",
                    calories: 250,
                    reduction: -25,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Frites croustillantes au four",
                    photo: images.baked_fries,
                    description: "Frites française",
                    calories: 194,
                    reduction: -15,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Haru Haru",
            telephone:"0556123456",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Pizza Hawaïenne",
                    photo: images.hawaiian_pizza,
                    description: "Bacon canadien, croûte de pizza maison, sauce à pizza",
                    calories: 250,
                    reduction: -10,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Pizza basilic",
                    photo: images.pizza,
                    description: "Pizza française à la basilic",
                    calories: 250,
                    reduction: -20,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Pâte à la tomate",
                    photo: images.tomato_pasta,
                    description: "Pâtes aux tomates fraîches",
                    calories: 100,
                    reduction: -35,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Salade hachée méditerranéenne",
                    photo: images.salad,
                    description: "Laitue finement hachée, tomates, concombres",
                    calories: 100,
                    reduction: -40,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Hot dogs Mexicain",
            telephone:"0556123456",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Tomates fraîches, tous les hot dogs au bœuf",
                    calories: 100,
                    reduction: -10,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Sushi world",
            telephone:"0556123456",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Bento",
                    photo: images.sushi,
                    description: "Saumon frais, riz sushi, avocat juteux frais",
                    calories: 100,
                    reduction: -50,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Fufu",
            telephone:"0556123456",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Nouilles au char siu",
                    calories: 200,
                    reduction: -60,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Nouilles vermicelles, crevettes cuites",
                    calories: 300,
                    reduction: -40,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "Un plat de riz traditionnel malais",
                    calories: 300,
                    reduction: -15,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani avec du mouton",
                    photo: images.nasi_briyani_mutton,
                    description: "Un plat de riz indien traditionnel avec du mouton",
                    calories: 300,
                    reduction: -15,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "Iglou",
            telephone:"0556123456",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                longitude: -0.5662939878139062,
            latitude: 44.85427259817056
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Trois couches Teh C Peng",
                    calories: 100,
                    reduction: -10,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Glace pilée aux haricots rouges",
                    calories: 100,
                    reduction: -15,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Gâteaux en couches",
                    calories: 300,
                    reduction: -25,
                    price: 20
                }
            ]

        }


    ]

    const K_OPTIONS = [
        {
            item: 'favoris',
            id: 'f',
        },
        {
            item: 'prix croissant',
            id: 'p_cr',
        },
        {
            item: 'prix decroissant',
            id: 'p_decr',
        },
        {
            item: 'distance croissant',
            id: 'd_cr',
        },
        {
          item: '% remise croissant',
          id: 'p_remise_cr',
        },
        {
          item: '% remise décroissant',
          id: 'p_remise_decr',
        },
      ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
    const [searchText, setSearchText ] = React.useState("")
    const [selectedMultiFilter, setSelectedMultiFilter] = React.useState([]);
    const [selectedFilter, setSelectedFilter] = React.useState({});

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)
        if (category.length > 0)
            return (<Text>{category[0].name}<Text style={{color:COLORS.primary}}> ● </Text></Text>);

        return ""
    }

    
    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding}}>
                <View>
                    <SearchBar
                    style={{width:'100%'}}
                        placeholder="Rechercher..."
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: SIZES.padding * 0.5,
                        marginRight: SIZES.padding * 0.5,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding2 }}
                />
            </View>
        )
    }

    function renderFilter(){
        //const onMultiChange = (item) => setSelectedMultiFilter(xorBy(selectedMultiFilter, [item], 'id'));
        const onChange = (val) => setSelectedFilter(val);
        return(
            <View style={{ padding: SIZES.padding, paddingTop: 0}}>
                <SelectBox
                    label="Filtrer par"
                    hideInputFilter
                    inputPlaceholder="Filtrer par..."
                    multiOptionContainerStyle={{backgroundColor: COLORS.primary}}
                    arrowIconColor={COLORS.primary}
                    toggleIconColor={COLORS.primary}
                    options={K_OPTIONS}
                    value={selectedFilter}
                    onChange={onChange}
                />
                </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2,
                        padding: SIZES.padding,
                        borderRadius: SIZES.radius *0.5,
                        backgroundColor:COLORS.white,
                        ...styles.shadow }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 150,
                            borderRadius: SIZES.radius * 0.5
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius *0.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderFilter()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;