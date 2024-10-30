import React, {useState} from 'react';
import ProductList from './product/Products';
import Product_Add from './product/Product_Add';
import Product_Search from './product/Product_Search';
import Product_Detail from './product/Product_Detail';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Route {
  key: string;
  title: string;
  icon: string;
  focusedIcon: string; // Thêm thuộc tính focusedIcon
}

function App(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ProductList', title: 'Products', icon: 'home',focusedIcon: 'home'},
    {key: 'Product_Add', title: 'Add', icon: 'add', focusedIcon: 'add'},
    {key: 'Product_Search', title: 'Search',icon: 'search', focusedIcon: 'search'},
    {key: 'Product_Detail', title: 'Detail',icon: 'info', focusedIcon: 'info'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    Product_Search: Product_Search,
    Product_Detail: Product_Detail,
  });

  const renderIcon = ({
    route,
    focused,
    color,
  }: {
    route: Route;
    focused: boolean;
    color: string;
  }) => {
    const iconName = focused ? route.focusedIcon : route.icon;
    return <Icon name={iconName} size={30} color={color} />;
  };

  return (
    <SafeAreaProvider>
      {/* <ProductList/> */}
      {/* <Product_Add/> */}
      {/* <Product_Search/> */}
      {/* <Product_Detail/> */}

      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        //Tao icon
        renderIcon={renderIcon}
      />
    </SafeAreaProvider>
  );
}

export default App;
