function DonutShop (location,minCustomers,maxCustomers,avgDonuts) {
		this.location = location;
		this.minCustomers = minCustomers;
		this.maxCustomers = maxCustomers;
		this.avgDonuts = avgDonuts;
			this.calcDonuts = function() {
				var hoursOpen = prompt("How many hours is the " + this.location +  " shop open?");
				totalHours = hoursOpen;
				for(var i=0;i<hoursOpen;i++){
				return Math.round(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + (this.minCustomers) * (this.avgDonuts)*(hoursOpen));
				};
			};
		};

var downTown = new DonutShop('Downtown',8,43,4.5);
var capitolHill = new DonutShop('Capitol Hill',4,37,2);
var southLakeUnion = new DonutShop('South Lake Union',9,23,6.33);
var wedgewood = new DonutShop('Wedgewood',2,28,1.25);
var ballard = new DonutShop('Ballard',8,58,3.75);
var stores = [downTown,capitolHill,southLakeUnion,wedgewood,ballard];
var totalHours = 0;

	function shopSelect(shop){
		var totalDonuts = shop.calcDonuts();

			console.log("If the " + shop.location + " shop is open for " + totalHours + " hours, the shop needs to make approximately " + totalDonuts + " donuts today.")
			console.log("That is an average of " + Math.round(totalDonuts/totalHours) + " donuts per hour");

	};

	for(i=0;i<stores.length;i++) {
	shopSelect(stores[i]);
	};