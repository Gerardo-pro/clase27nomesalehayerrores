import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Tienda from "../Pantallas/Tienda/Tienda";
import AddProduct from "../Pantallas/Tienda/AddProduct";
import Contacto from "../Pantallas/Tienda/Contacto";
import MensajesList from "../Pantallas/Tienda/MensajesList";
import Detalle from "../Pantallas/Tienda/Detalle";


const Stack = createStackNavigator();


export default function TiendaStack()
{
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Tienda}
                name="Tienda"
                options={{headerShown:false}}
            />

            <Stack.Screen 
                component={AddProduct}
                name="add-product"
                options={{
                title: "Agregar Nuevo Producto",
                headerStyle: { backgroundColor: "#128C7E" },
                headerTintColor: "#fff",
                }}
            />

            <Stack.Screen 
                component={Detalle}
                name="detalle"
                options={{
                headerTrasparent: true, 
                headerTintColor: "#128C7E",
                title: "", 
                 }}
               
            />

            <Stack.Screen component={MensajesList}
                name="mensajes"
                options={{
                title: "Mensajes",
                headerStyle: { backgroundColor: "#128C7E" },
                headerTintColor: "#fff",
                }}
            />

            <Stack.Screen 
                component={Contacto}
                name="contacto"
                options={{
                title: "Contacto",
                headerStyle: { backgroundColor: "#128C7E" },
                headerTintColor: "#fff",
                }}
            />
        </Stack.Navigator>
    );
}




