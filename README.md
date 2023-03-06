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
- max_level
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
Docker
```sh
# Start the Containers
docker compose up

# Delete the Containers + Images
docker compose down --rmi all

# List all running Containers
docker ps

# Execute Command inside running Container / go inside
docker exec -it CONTAINERID /bin/bash
```

## Troubleshooting
### Frontend

### Backend
### Database
#### **[ERROR] Another process with pid XX is using unix socket file**
Happens whenever you build the devgame_my-db Volume for the first time.<br>
[Use:](https://stackoverflow.com/questions/36103721/docker-db-container-running-another-process-with-pid-id-is-using-unix-socket) ```sudo rm /var/lib/docker/volumes/devgame_my-db/_data/mysql.sock.lock``` 

