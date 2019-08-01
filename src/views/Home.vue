<template>
    <v-container fluid fill-height class="grey" darken-4>
        <v-layout row wrap align-content-start>
            <v-flex xs12 md4 align-self-start>
                <v-card color="red ml-3" dark max-width="400">
                    <v-card-title>
                        <v-icon large left>
                            mdi-message-alert-outline
                        </v-icon>
                        <span class="title font-weight-light"
                            >Announcement</span
                        >
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                        "Beta version of the website is now live. Check calendar
                        for raid informations and member list for Guild/Raid
                        roles."
                    </v-card-text>

                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="">
                                <v-img
                                    class="elevation-6"
                                    src="../assets/avatars/avataaars (1).png"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>Clickys</v-list-item-title>
                            </v-list-item-content>

                            <v-layout align-center justify-end> </v-layout>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 md4>
                <v-card color="primary" dark max-width="400">
                    <v-card-title>
                        <v-icon large left>
                            mdi-message-alert-outline
                        </v-icon>
                        <span class="title font-weight-light">News</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                        "First Guild Meeting at 08/01/2019 meet at gm place"
                    </v-card-text>

                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="">
                                <v-img
                                    class="elevation-6"
                                    src="../assets/avatars/avataaars (1).png"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>Clickys</v-list-item-title>
                            </v-list-item-content>

                            <v-layout align-center justify-end> </v-layout>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    components: {}
};
</script>

<style scoped>
.main {
    min-height: 100vh;
    background-color: #424242;
}
</style>

