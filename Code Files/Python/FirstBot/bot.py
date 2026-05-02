import discord
import random
from discord.ext import commands, tasks
from itertools import cycle

intents = discord.Intents(messages = True, guilds = True, reactions = True, members = True, presences = True)
client = commands.Bot(command_prefix = "f!", help_command=None, intents = intents)
status = cycle(["f!help", "f!Help", "Wait a few seconds..."])


#start functions
@client.event
async def on_ready():
    change_status.start()
    print("Bot is ready.")
#await client.change_presence(status=discord.Status.idle, activity=discord.Activity(type=discord.ActivityType.watching, name="Anime")) -- for watching
#await client.change_presence(status=discord.Status.idle, activity=discord.Game("f!help")) -- for f!help

@tasks.loop(seconds=5)
async def change_status():
    await client.change_presence(activity=discord.Game(next(status)))


#Admin commands

@client.command(aliases = ["Purge, PURGE"])
@commands.has_permissions(manage_messages = True)
async def purge(ctx, amount=1):
        await ctx.channel.purge(limit=amount + 1)


#Help Commands

@client.command(aliases = ["Help"])
async def help(ctx):
    await ctx.send("**Ping** -Displays message latency.  **Purge** -deletes a specific amount of messages.  **8Ball** -Ask a question and the Magic 8-Ball will give you an answer.  **Diceroll** -Chooses a random number from 1 to 6.  **Help** -This, duh.")


@client.command(aliases = ["Ping, PING, PIng, PinG"])
async def ping(ctx):
    await ctx.send(f"**Ping**: {round(client.latency * 1000)}ms")

#Fun commands

@client.command(aliases = ["Diceroll", "dice", "Dice"])
async def diceroll(ctx):
    responses = ["**1**",
                 "**2**",
                 "**3**",
                 "**4**",
                 "**5**",
                 "**6**"]
    await ctx.send(f"{random.choice(responses)}")

@client.command(aliases=["8Ball", "8ball"])
async def _8ball(ctx, *, question):
    responses = ["It is certain.",
                "It is decidedly so.",
                "Yes - definitely.",
                "You may rely on it.",
                "As I see it, yes.",
                "Most likely.",
                "Outlook good.",
                "Yes.",
                "Signs point to yes.",
                "Reply hazy, try again.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don't count on it.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Very doubtful.",
                "Go away before I eat your cat.",
                "I'm gonna hurt you if you don't leave me alone.",
                "I thought too hard and died.",
                "Screw off m8 figure it out yourself."]
    await ctx.send(f"question: {question}\nAnswer: {random.choice(responses)}")


#Run Bot
client.run("ODMzMjM4ODY2OTYxODkxMzU4.YHvcKg.i_1rewAm0qcIt2bqrQvsrG6prbc")
