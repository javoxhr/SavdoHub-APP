<template>
    <div>
        <h1>Данные из Firestore</h1>
        <ul>
            <li v-for="(item, index) in products" :key="index">
                {{ item.firstName }} - {{ item.lastName }}
            </li>
        </ul>

        <!-- Форма для добавления нового продукта -->
        <button @click="addProduct()">Добавить продукт</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const products = ref([]);

const db = useNuxtApp().$db;

onMounted(async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        products.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("Данные успешно получены:", products._rawValue);
});

async function addProduct() {
    const productData = {
        firstName: "Новый продукт",
        lastName: "300000",
        isOnline: true,
        createdAt: new Date()
    };

    await addDoc(collection(db, "users"), productData);

    products.value.push(productData);

    console.log("Продукт успешно добавлен");
}
</script>