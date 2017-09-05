import React, { Component } from 'react';
import {Container,Name,GameListHeader,GameList,GameRecord,Column,ColumnLabels} from './styledComponents';

class Profile extends Component {

	getRecords =() => {
		return this.props.user.games.map((game,index) => {
			return (
				<GameRecord 
					key={index}
					index={index}
				>
					<Column>
						{(game.winner)?'胜利':'失败'}
					</Column>
					<Column>
						机器人
					</Column>
					<Column>
						您猜对啦！
					</Column>
					<Column>
						{game.createAt}
					</Column>
				</GameRecord>
				)
		})
	}

  render() {
  	const {email} = this.props.user;
    return(
    	<Container>
    		<Name>
    			{email}
    		</Name>
    		<GameList>
    		<GameListHeader>
    		My Games
    		</GameListHeader>
    		<ColumnLabels>
    		<Column>
    			战况
    		</Column>
    		<Column>
    			猜测
    		</Column>
    		<Column>
    			猜测结果
    		</Column>
    		<Column>
    			时间
    		</Column>
    		</ColumnLabels>
    		{this.getRecords()}
    		</GameList>
    	</Container>
    	)
  }
}

Profile.defaultProps={
	user: {
			email:'USER_EMAIL',
			games:[
				{
					winner: true,
					createAt: '12/23/2017',
					id:'0001'
				},
				{
					winner: true,
					createAt: '12/24/2017',
					id:'0002'
				},
				{
					winner: true,
					createAt: '12/25/2017',
					id:'0003'
				}
			]
		}
}

export default Profile;
