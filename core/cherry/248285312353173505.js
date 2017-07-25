const Discord = require("discord.js");
const Jimp = require("jimp");
const fs = require("fs");
const paths = require("../paths.js");
const REACTIONS = "./resources/imgres/reactions/"

module.exports = {

    //------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------//
    //---------------  SKYNET MAID CAFE CHERRY-PICKED FEATURES  --------------------//
    //------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------//


    presenceUpdate:  function (gear,DB,userDB,bot, oldMember, newMember){
       // console.log("oldMember")
        try{
       // console.log(newMember.presence.game.name.toLowerCase())
      var sky = newMember.guild;
          //  setTimeout(fu => {
                try {
                    if (newMember.id == '248435798179971072' && newMember.presence.game.name.toLowerCase() == "for honor") {
                        console.log('HONOR')
                        sky.defaultChannel.send("O gay do " + newMember + " já tá jogando aquele jogo de viado de novo.").catch()
                    }


                    if ((newMember.presence.game.name.toLowerCase() == "heroes of the storm") && (oldMember.presence.game.name.toLowerCase() != "heroes of the storm")) {
                        console.log('HERO')
                        var herois = sky.roles.find('name', 'Heróis do Toró')
                        sky.defaultChannel.send(herois + " pessoal, **" + newMember.displayName + "** abriu o jogo, juntem ae.").then(jjm => {
                            jjm.delete(600000)
                        }).catch()

                        var team = 0
                        newMember.guild.presences.forEach(e => {
                            if (e.game && e.game.name.toLowerCase() == "heroes of the storm") team++;
                        })

                        if (team > 1 && team < 6) {
                            sky.defaultChannel.send("Temos **" + team + "** malucos jogando, faltam " + (5 - team) + " e fecha o time.").then(jjm => {
                                jjm.delete(600000)
                            }).catch()
                        }
                        if (team > 5 && team < 10) {
                            sky.defaultChannel.send("Temos **" + team + "** malucos jogando, faltam " + (10 - team) + " e temos dois times!!!").then(jjm => {
                                jjm.delete(600000)
                            }).catch()
                        }
                        if (team == 5) {
                            sky.defaultChannel.send("FECHOU TIME!!!").then(jjm => {
                                jjm.delete(600000)
                            }).catch()
                        }
                        if (team == 10) {
                            sky.defaultChannel.send("FECHOU DOIS TIMES!!!").then(jjm => {
                                jjm.delete(600000)
                            }).catch()
                        }

                    }
                } catch (e) {
                    if (newMember.id == '248435798179971072' && oldMember.presence.game.name.toLowerCase() == "for honor" && !newMember.presence.game) {
                        sky.defaultChannel.send(" Juba acabou de sair do jogo de viado dele.")

                    }
                }
           // }, 10000)

        }catch(e){
           // console.log(e)
        }
        },

message: function (gear,DB,userDB,bot,message)  {
    try{
        if (message.content==undefined)return;
        let prefix = DB.get(message.guild.id).modules.PREFIX

            var now = new Date().getTime();
            var dayC = 86400000


            if (!message.guild) return;

            if (message.content.includes('mad scientist') || message.content.includes('mado saient')) {

                message.channel.send('https://www.youtube.com/watch?v=gjTzz8cOxBU')
            }

            if (message.content.startsWith(prefix + "salty")) {
                message.channel.send({
                    files: [REACTIONS + "juba.png"]
                })
            };

            if (message.content.startsWith(prefix + "vidal")) {
                message.channel.send({
                    files: [REACTIONS + "vidaru.png"]
                })

            };

            if (message.content.startsWith(prefix + "several")) {
                message.channel.send({
                    files: [REACTIONS + "several.png"]
                })

            };

            if (message.content.includes("quantos heróis temos") || message.content.includes("quantos herois temos") || message.content.includes("how many heroes")) {

                var team = 0
                message.guild.presences.forEach(e => {
                    if (e.game && e.game.name.toLowerCase() == "heroes of the storm") team++;
                })
                var n = ""
                if (team > 1) n = "s";
                message.reply(' temos **' + team + '** Herói' + n + ' no Nexus no momento.')
            };


        }catch(e){console.log(e)}
        }


    }
