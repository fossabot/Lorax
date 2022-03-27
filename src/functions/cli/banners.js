// # /////////////////////////////////////////////////////////////////////////// # //
// #                                                                             # //
// #                      Copyright 2022 TheH2SO4                                # //
// #                                                                             # //
// #   Licensed under the Apache License, Version 2.0 (the 'License');           # //
// #   you may not use this file except in compliance with the License.          # //
// #   You may obtain a copy of the License at                                   # //
// #                                                                             # //
// #       http://www.apache.org/licenses/LICENSE-2.0                            # //
// #                                                                             # //
// #   Unless required by applicable law or agreed to in writing, software       # //
// #   distributed under the License is distributed on an 'AS IS' BASIS,         # //
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  # //
// #   See the License for the specific language governing permissions and       # //
// #   limitations under the License.                                            # //
// #                                                                             # //
// # /////////////////////////////////////////////////////////////////////////// # //

'use strict'

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// # //

                  //////////////////////////////////
                  //  _                           //
                  // | |                          //
                  // | |     ___  _ __ __ ___  __ //
                  // | |    / _ \| '__/ _` \ \/ / //
                  // | |___| (_) | | | (_| |>  <  //
                  // |______\___/|_|  \__,_/_/\_\ //
                  //                              //
                  //////////////////////////////////

// # ////////////////| [📚] - Libraries

const fs = require('fs')
const { exec } = require('child_process')
const yaml = require('js-yaml')
const terminal = require( 'terminal-kit' ).terminal
const CFonts = require('cfonts')

// # ////////////////| [📓] - Files

const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'))

// # ////////////////| [🧪] - Constants



// # ////////////////| [🍣] - Variables

// # | Settings 🛠️

const st_env_language = settings.enviroment.language
const st_name = settings.basic.name

// # ////////////////| [📢] - Functions

// # | Banners ❗

async function banner() {
    if (st_name === 'lorax' || st_name === 'Lorax') {
        CFonts.say(`Lorax|TheH2SO4`, {
            font: '3d',
            align: 'center',
            colors: ['#6C0BA9','#FFFF00']
        })
    } else {
        CFonts.say(`${st_name}|Lorax`, {
            font: '3d',
            align: 'center',
            colors: ['#6C0BA9','#FFFF00']
        })
    }
}

async function loading() {
    var spinner = await terminal.spinner('unboxing-color')
        if (st_env_language === 'EN') return terminal(' Loading...')
        else if (st_env_language === 'ES') return terminal(' Cargando...')
}

// # ////////////////| [🛻] - Exports

module.exports = { banner, loading }

// # ////////////////| [🌧️] - End

                  //////////////////////////////////
                  //  _                           //
                  // | |                          //
                  // | |     ___  _ __ __ ___  __ //
                  // | |    / _ \| '__/ _` \ \/ / //
                  // | |___| (_) | | | (_| |>  <  //
                  // |______\___/|_|  \__,_/_/\_\ //
                  //                              //
                  //////////////////////////////////

// # Thanks for using Lorax! <3