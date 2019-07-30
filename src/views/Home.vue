<template>
    <v-container fluid fill-height class="grey" darken-4>
        <v-card class="mx-auto" color="red" dark max-width="400">
            <v-card-title>
                <v-icon large left>
                    mdi-message-alert-outline
                </v-icon>
                <span class="title font-weight-light">Announcement</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
                "Beta version of the website is now live. Check calendar for
                raid informations and member list for Guild/Raid roles."
            </v-card-text>

            <v-card-actions>
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                        <v-img
                            class="elevation-6"
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Clickys</v-list-item-title>
                    </v-list-item-content>

                    <v-layout align-center justify-end> </v-layout>
                </v-list-item>
            </v-card-actions>
        </v-card>
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

