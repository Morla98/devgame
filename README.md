# DevGame - Recreation of a Softwareproject from 2019-2020 

# [Detailed Project Explanation](DevGame.pdf)
## TLDR:
A system is to be designed and implemented in which data on activities from various subsystems are collected. The data will then be evaluated and Achievements are generated which are assigned to users and/or groups and presented via a web application.

## Used Technology
* Docker
* Python Django
  * Communictation over REST-API
  * LDAP Authentication including Login and Encryption
* React
* MySQL
* Git
* Statistic Analysing Software (TODO: FIND USAGE & FIND SOFTWARE)


## Database Schematic
#### Collectoren
- id
- name 
- status 
- UserID
- AchievementID

#### User
- id
- first_name
- last_name
- email
- Department

#### Achievement
- id
- CollectorID
- name
- description
- level
- max_score

#### User_Achievement
- id
- AchievmentID
- UserID
- score
- current_level
	
## Useful Commands
Exit the Matrix
```sh
shutdown --force
```



