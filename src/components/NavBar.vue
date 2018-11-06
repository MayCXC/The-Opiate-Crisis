<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark" fixed="top" sticky>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <router-link to="/landing">
                <b-navbar-brand>
                    Politify
                </b-navbar-brand>
            </router-link>

            <b-collapse is-nav id="nav_collapse">

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            About
                        </template>
                        <b-dropdown-item target="_blank" href="https://github.com/jrgermain/hackathon-political-awareness">View Source on GitHub</b-dropdown-item>
                        <!--b-dropdown-item target="_blank" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" disabled>Top Secret Admin Panel</b-dropdown-item-->
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
nav-bar {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
