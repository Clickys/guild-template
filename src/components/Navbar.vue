<template>
    <nav>
        <v-navigation-drawer
            v-model="drawer"
            dark
            top
            clipped
            app
            class="white--text"
        >
            <v-card class="mx-auto" max-width="400" tile>
                <v-card-title dark class="white--text">
                    <span class="headline">Menu</span>
                </v-card-title>
                <v-list>
                    <v-list-item-group v-model="item" color="white">
                        <v-list-item
                            :href="item.src"
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-icon v-text="item.icon" class="mr-5"></v-icon>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.text"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-navigation-drawer>
        <v-toolbar class="white--text" dark>
            <v-app-bar-nav-icon
                class="white--text"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase font-weight-thin"
                >Beenerds
                <span class="font-weight-bold">Guild</span></v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn href="#/calendar" class="mr-2" fab x-small dark darken-4>
                <v-icon class="white--text">mdi-calendar</v-icon>
            </v-btn>
            <v-btn fab x-small dark class="mr-5" darken-4 to="/">
                <v-icon class="white--text">mdi-home</v-icon>
            </v-btn>
            <v-avatar size="48">
                <img
                    src="https://media.mmo-champion.com/images/news/2018/february/WoWIcon22.jpg"
                    alt="alt"
                />
                <v-icon>mdi-chevron-down</v-icon>
            </v-avatar>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
            drawer: false,
            item: 1,
            items: [
                { text: 'Home', icon: 'mdi-home', src: '#/' },
                { text: 'Calendar', icon: 'mdi-calendar', src: '#/calendar' }
            ]
        };
    }
};
</script>
