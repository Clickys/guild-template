<template>
    <v-container fluid fill-height class="grey" darken-4>
        <v-layout wrap>
            <v-flex xs12 md6>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        RL
                    </v-avatar>
                    Raid Leader
                </v-chip>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        GM
                    </v-avatar>
                    Guild Master
                </v-chip>
                <v-chip pill class="mb-1">
                    <v-avatar left class="red white--text">
                        CL
                    </v-avatar>
                    Class Leader
                </v-chip>
                <v-chip pill class="">
                    <v-avatar left class="red white--text">
                        O
                    </v-avatar>
                    Officer
                </v-chip>
                <br />
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        C
                    </v-avatar>
                    Casual
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        BL
                    </v-avatar>
                    Bank Leader
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        RDR
                    </v-avatar>
                    Raid Data Record
                </v-chip>
                <v-chip pill class="mt-2    ">
                    <v-avatar left class="red white--text">
                        MT
                    </v-avatar>
                    Main Tank
                </v-chip>
                <br />
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        RO
                    </v-avatar>
                    Raid Organizer
                </v-chip>
                <v-chip pill class="mt-2">
                    <v-avatar left class="red white--text">
                        CR
                    </v-avatar>
                    Cheerleader
                </v-chip>
                <br />
            </v-flex>
            <v-flex xs12 md6>
                <v-simple-table dark>
                    <thead>
                        <tr>
                            <th class="text-left">Nickname</th>
                            <th class="text-left">Class</th>
                            <th class="text-left">Raid Role</th>
                            <th class="text-left">Guild Role</th>
                            <th class="text-left"></th>
                            <th class="text-left">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        Filter
                                        <v-icon v-on="on" small
                                            >mdi-chevron-down</v-icon
                                        >
                                    </template>
                                    <v-list dark>
                                        <v-list-item
                                            v-for="(filter, index) in filters"
                                            :key="index"
                                        >
                                            <v-list-item-title
                                                @click="show(filter.name)"
                                                :style="{ cursor: 'pointer' }"
                                                >{{
                                                    filter.name
                                                }}</v-list-item-title
                                            >
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(member, index) in filteredMembers"
                            :key="member.nickname + index"
                        >
                            <td>{{ member.nickname }}</td>
                            <td>
                                {{ member.class }}
                            </td>
                            <td>{{ member.raidRole }}</td>
                            <td>
                                <template v-if="member.guildRoles.length">
                                    <v-chip
                                        pill
                                        class="red font-weight-bold"
                                        v-for="(role,
                                        index) in member.guildRoles"
                                        v-bind:key="
                                            member.nickname + role + index
                                        "
                                    >
                                        {{ role }}
                                    </v-chip>
                                </template>
                            </td>
                            <td>
                                <v-avatar>
                                    <img :src="member.classAvatar" alt="alt" />
                                </v-avatar>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
const classAvatars = {
    warrior: require('../assets/avatars/WoW-Classic-Warrior.png'),
    shaman: require('../assets/avatars/WoW-Classic-Shaman-Guide.png'),
    priest: require('../assets/avatars/WoW-Classic-Priest-Guide.png'),
    mage: require('../assets/avatars/mage_13.png'),
    druid: require('../assets/avatars/WoW-Classic-Druid-Guide.png'),
    rogue: require('../assets/avatars/WoW-Classic-Rogue-Guide.png'),
    warlock: require('../assets/avatars/WoW-Classic-Warlock-Guide-150x150.png'),
    hunter: require('../assets/avatars/WoW-Classic-Hunter-Guide-150x150.png')
};
export default {
    data() {
        return {
            membersDatabase: [
                {
                    nickname: 'Nicholas Evangelides',
                    class: 'Rogue',
                    guildRoles: ['GM', 'RL', 'CL'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Clickys',
                    class: 'Druid',
                    guildRoles: ['CR'],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.druid
                },
                {
                    nickname: 'Pampos Charalampous',
                    class: 'Warrior',
                    guildRoles: ['RL', 'CL', 'O'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Giorgos Freeman',
                    class: 'Warrior',
                    guildRoles: ['MT', 'TL'],
                    raidRole: 'Tank',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Vasilis Louka',
                    class: 'Warrior',
                    guildRoles: ['BL', 'RO', 'O'],
                    raidRole: 'Tank',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Stelios Michaelides',
                    class: 'Warrior',
                    guildRoles: [],
                    raidRole: 'Tank',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Savvas Michael',
                    class: 'Warrior',
                    guildRoles: ['CL'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Sotos Ioannou',
                    class: 'Warrior',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Harrys Nikolaidis',
                    class: 'Warrior',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Vangelis Gerolemou',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'George Kleanthous',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'Antonis Flagofas',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'Mixalis Xrisostomou',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'David Hondakias',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'Sergios Panagiotou',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'Sotiris Varnava',
                    class: 'Shaman',
                    guildRoles: [],
                    raidRole: 'Encha',
                    classAvatar: classAvatars.shaman
                },
                {
                    nickname: 'Stavros Zachariou',
                    class: 'Priest',
                    guildRoles: ['CL'],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Geramanis Giorgos',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Giorgos Kamilalis',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Panos Geropoulos',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Larrys Mattis',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Christos Konnaris',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Sofoclis Sofocleous',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Nikolas Maloupas',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Marios Athanasiou',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Giannis Proxenou',
                    class: 'Priest',
                    guildRoles: [],
                    raidRole: 'Shadow',
                    classAvatar: classAvatars.priest
                },

                {
                    nickname: 'Loukas Elia',
                    class: 'Druid',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.druid
                },
                {
                    nickname: 'Andreas Christodoulides',
                    class: 'Druid',
                    guildRoles: [],
                    raidRole: 'Resto',
                    classAvatar: classAvatars.druid
                },
                {
                    nickname: 'Yiannis Emilianov',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Stephanos Gavriel',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Mixalis (Lifestalker)',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Nikolas Nikolaides',
                    class: 'Mage',
                    guildRoles: ['RDR', 'O'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Ioakeim Frangoulis',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Alexandros Ellinas',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Xaris Hadjiyiannis',
                    class: 'Mage',
                    guildRoles: ['CL', 'RL'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Michael-angelos Tryfonos',
                    class: 'Mage',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Sotos Takis',
                    class: 'Rogue',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Alexandros Theodorou',
                    class: 'Rogue',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Christos Antoniou',
                    class: 'Rogue',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Kleanthis Zaxariou',
                    class: 'Rogue',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Pampos Ioannou',
                    class: 'Rogue',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.rogue
                },
                {
                    nickname: 'Alexadros Christophorou',
                    class: 'Warlock',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warlock
                },
                {
                    nickname: 'Daniel Aravis',
                    class: 'Warlock',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warlock
                },
                {
                    nickname: 'George Demetriou',
                    class: 'Warlock',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warlock
                },
                {
                    nickname: 'Nikolas Lophitis',
                    class: 'Warlock',
                    guildRoles: ['CL'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warlock
                },
                {
                    nickname: 'Vasilis Kokas',
                    class: 'Hunter',
                    guildRoles: ['RL', 'CL'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.hunter
                },
                {
                    nickname: 'Andreas Aravis',
                    class: 'Hunter',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.hunter
                },
                {
                    nickname: 'Stavros Agathokleous',
                    class: 'Hunter',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.hunter
                },
                {
                    nickname: 'Alex Konstantinou',
                    class: 'Hunter',
                    guildRoles: [],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.hunter
                },
                {
                    nickname: 'Pampos Vasileiou',
                    class: 'Warrior',
                    guildRoles: ['C'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                },
                {
                    nickname: 'Giannis Spanachides',
                    class: 'Mage',
                    guildRoles: ['C'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.mage
                },
                {
                    nickname: 'Andreas Glikis',
                    class: 'Warlock',
                    guildRoles: ['C'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warlock
                },
                {
                    nickname: 'Marios Augousti',
                    class: 'Priest',
                    guildRoles: ['C'],
                    raidRole: 'Healer',
                    classAvatar: classAvatars.priest
                },
                {
                    nickname: 'Antreas Hadjantonis ',
                    class: 'Warrior',
                    guildRoles: ['C'],
                    raidRole: 'Dps',
                    classAvatar: classAvatars.warrior
                }
            ],
            filteredMembers: [],
            filters: [
                {
                    name: 'All'
                },
                {
                    name: 'Warrior'
                },
                {
                    name: 'Shaman'
                },
                {
                    name: 'Priest'
                },
                {
                    name: 'Druid'
                },
                {
                    name: 'Mage'
                },
                {
                    name: 'Rogue'
                },
                {
                    name: 'Warlock'
                },
                {
                    name: 'Hunter'
                }
            ]
        };
    },

    methods: {
        showAllMembers: function() {
            this.filteredMembers = [...this.membersDatabase];
        },
        show: function(wowClass) {
            if (wowClass === 'All') {
                this.filteredMembers = [...this.membersDatabase];
                return;
            }
            this.filteredMembers = this.membersDatabase.filter(member => {
                return member.class === wowClass;
            });
        }
    },

    computed: {
        members: function() {
            return this.filteredMembers;
        }
    },
    mounted() {
        this.showAllMembers();
    }
};
</script>
