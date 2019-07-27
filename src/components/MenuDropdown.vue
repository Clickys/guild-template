<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-chevron-down</v-icon>
            </template>
            <v-list dark>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [{ title: 'Home' }, { title: 'Logout' }]
    })
};
</script>