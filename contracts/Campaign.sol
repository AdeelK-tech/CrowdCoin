// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract CampaignFactory{
    Campaign[] public Campaigns;
    function createCampaign(uint _minContribution)public{
        Campaign c=new Campaign(_minContribution,msg.sender);
        Campaigns.push(c);
    }
    function getCampaigns()public view returns(Campaign[] memory){
        return Campaigns;
    }
}
contract Campaign{
        uint public minContribution;
        address public manager;
        mapping(address=>bool) public approvers;
        uint approversCount;
        struct Request{
            uint amount;
            string description;
            address payable recipient;
            bool completed;
           uint approvalCount;
           mapping(address=>bool) approvals;

        }
         uint numRequests;
    mapping (uint => Request) public requests;
       
        constructor (uint _minCont,address _manager){
        minContribution=_minCont;
        manager=_manager;
    }

    modifier onlyManager(){
        require(msg.sender==manager,"You are not the manager of the campaign");
        _;
    }
    function contribute()public payable{
         require(msg.value>minContribution,"You have to contribue enough");
         approvers[msg.sender]=true;
         approversCount++;
    }
    function createRequest(uint _amount,string memory _desc,address payable _recipient) public onlyManager{
        Request storage req=requests[numRequests];
         req.description=_desc;
         req.amount=_amount;
         req.recipient=_recipient;
         req.completed=false;
         req.approvalCount=0;
         numRequests++;
        }
        function approveRequest(uint _index)public{
            Request storage req=requests[_index];
            require(approvers[msg.sender]);
            require(!req.approvals[msg.sender]);
            req.approvals[msg.sender]=true;
            req.approvalCount++;
        }
        function finalizeRequest(uint _index)public onlyManager{
            Request storage req= requests[_index];
            require(!req.completed);
            require(req.approvalCount>approversCount/2);
            req.recipient.transfer(req.amount);
            req.completed=true;
        }
}